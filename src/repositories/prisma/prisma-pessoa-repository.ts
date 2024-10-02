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
    const errorMessages: string[] = [];

    const emailExists = await this.prisma.pessoa.findFirst({
      where: {
        email: data.email,
      },
    });

    if (emailExists) {
      errorMessages.push(`O email ${data.email} já está registrado.`);
    }

    const cpfExists = await this.prisma.pessoa.findFirst({
      where: {
        cpf: data.cpf,
      },
    });

    if (cpfExists) {
      errorMessages.push(`O CPF ${data.cpf} já está registrado.`);
    }

    if (data.identidade) {
      const identidadeExists = await this.prisma.pessoa.findFirst({
        where: {
          identidade: data.identidade,
        },
      });

      if (identidadeExists) {
        errorMessages.push(
          `A identidade ${data.identidade} já está registrada.`,
        );
      }
    }

    if (errorMessages.length > 0) {
      throw new Error(errorMessages.join(' '));
    }

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
