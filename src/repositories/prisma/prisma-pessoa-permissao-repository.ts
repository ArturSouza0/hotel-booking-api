import { Injectable } from '@nestjs/common';
import { PessoaPermissaoRepository } from '../pessoa-permissao-repository';
import { PrismaService } from 'src/database/prisma.service';
import { PessoaPermissaoBody } from 'src/dtos/criar-pessoa-permissao';
import { PessoaPermissao } from 'src/entities/pessoa-permissao-entity';

@Injectable()
export class PrismaPessoaPermissaoRepository
  implements PessoaPermissaoRepository
{
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<PessoaPermissao[]> {
    return this.prisma.pessoaPermissao.findMany();
  }

  async create(data: PessoaPermissaoBody): Promise<PessoaPermissao> {
    return await this.prisma.pessoaPermissao.create({
      data: { ...data },
    });
  }

  async findById(id: number): Promise<PessoaPermissao> {
    const pessoaPermissao = await this.prisma.pessoaPermissao.findUnique({
      where: { id },
    });
    return pessoaPermissao;
  }

  async update(
    id: number,
    data: Partial<PessoaPermissaoBody>,
  ): Promise<PessoaPermissao> {
    return await this.prisma.pessoaPermissao.update({
      where: { id },
      data: { ...data },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.pessoaPermissao.delete({
      where: { id },
    });
  }
}
