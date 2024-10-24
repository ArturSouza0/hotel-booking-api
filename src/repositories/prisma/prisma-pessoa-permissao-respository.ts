import { PessoaPermissaoBody } from 'src/dtos/criar-pessoa-permissao';
import { PessoaPermissaoRepository } from '../pessoa-permissao-repository';
import { PessoaPermissao } from 'src/entities/pessoa-permissao-entity';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaPessoaPermissaoRepository
  implements PessoaPermissaoRepository
{
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<PessoaPermissaoBody[]> {
    return await this.prisma.pessoaPermissao.findMany();
  }

  async findById(id: number): Promise<PessoaPermissao | null> {
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

  async create(data: PessoaPermissaoBody): Promise<PessoaPermissao> {
    return await this.prisma.pessoaPermissao.create({
      data: {
        ...data,
      },
    });
  }
}
