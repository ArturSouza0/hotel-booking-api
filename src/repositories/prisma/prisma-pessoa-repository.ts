import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Pessoa } from 'src/entities/pessoa-entity';
import { PessoaRepository } from '../pessoa-repository';
import { PessoaBody } from 'src/dtos/criar-pessoa';
import { DateUtils } from 'src/utils/date-utils';
import { HashService } from 'src/services/hash/hash.service';

@Injectable()
export class PrismaPessoaRepository implements PessoaRepository {
  constructor(
    private prisma: PrismaService,
    private hashService: HashService,
  ) {}

  async create(data: PessoaBody): Promise<Pessoa> {
    // Verificações de existência
    const existingRecords = await Promise.all([
      this.prisma.pessoa.findFirst({ where: { email: data.email } }),
      this.prisma.pessoa.findFirst({ where: { cpf: data.cpf } }),
      data.identidade
        ? this.prisma.pessoa.findFirst({
            where: { identidade: data.identidade },
          })
        : null,
    ]);

    const errorMessages = [
      existingRecords[0] ? `O email ${data.email} já está registrado.` : null,
      existingRecords[1] ? `O CPF ${data.cpf} já está registrado.` : null,
      existingRecords[2]
        ? `A identidade ${data.identidade} já está registrada.`
        : null,
    ].filter(Boolean); // Filtra mensagens não nulas

    if (errorMessages.length > 0) {
      throw new Error(errorMessages.join(' '));
    }

    // Gera a senha hash e cria a entrada no banco de dados
    const hashedSenha = await this.hashService.hashSenha(data.senha);

    return this.prisma.pessoa.create({
      data: {
        ...data,
        senha: hashedSenha,
        ativo: true,
        data_nascimento: data.data_nascimento
          ? new Date(data.data_nascimento)
          : null,
        data_criacao: DateUtils.getCurrentDate(),
        data_atualizacao: null,
      },
    });
  }

  async findPermissaoByNome(descricao: string) {
    return await this.prisma.permissao.findFirst({
      where: { descricao },
    });
  }

  async addPermissaoToPessoa(pessoaId: number, permissaoId: number) {
    return await this.prisma.pessoaPermissao.create({
      data: {
        pessoa_id: pessoaId,
        permissao_id: permissaoId,
      },
    });
  }

  async findById(id: number): Promise<Pessoa | null> {
    const pessoa = await this.prisma.pessoa.findUnique({
      where: { id },
    });
    return pessoa;
  }

  async findByEmail(email: string): Promise<Pessoa | null> {
    const pessoa = await this.prisma.pessoa.findUnique({
      where: { email },
    });
    return pessoa;
  }

  async findAll(): Promise<Pessoa[]> {
    return this.prisma.pessoa.findMany();
  }

  async update(id: number, data: Partial<PessoaBody>): Promise<Pessoa> {
    const hashedSenha = await this.hashService.hashSenha(data.senha);

    return this.prisma.pessoa.update({
      where: { id },
      data: {
        ...data,
        senha: hashedSenha,
        data_atualizacao: DateUtils.getCurrentDate(),
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.pessoa.delete({
      where: { id },
    });
  }
}
