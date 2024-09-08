import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PermissaoBody } from 'src/dtos/criar-permissao';
import { PermissaoRepository } from '../permissao-repository';

@Injectable()
export class PrismaPermissaoRepository implements PermissaoRepository {
  constructor(private prisma: PrismaService) {}

  async create(descricao: string): Promise<void> {
    await this.prisma.permissoes.create({
      data: {
        descricao,
      },
    });
  }

  async findAll(): Promise<PermissaoBody[]> {
    return this.prisma.permissoes.findMany();
  }

  async findById(id: number): Promise<PermissaoBody | null> {
    return this.prisma.permissoes.findUnique({
      where: { id },
    });
  }

  async update(id: number, descricao: string): Promise<void> {
    await this.prisma.permissoes.update({
      where: { id },
      data: { descricao },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.permissoes.delete({
      where: { id },
    });
  }
}
