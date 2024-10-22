import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PermissaoBody } from 'src/dtos/criar-permissao';
import { PermissaoRepository } from '../permissao-repository';
import { Permissao } from 'src/entities/permissao-entity';

@Injectable()
export class PrismaPermissaoRepository implements PermissaoRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: PermissaoBody): Promise<Permissao> {
    return await this.prisma.permissao.create({
      data: {
        ...data,
      },
    });
  }
  async findById(id: number): Promise<Permissao | null> {
    const permissao = await this.prisma.permissao.findUnique({
      where: { id },
    });
    return permissao;
  }

  async findAll(): Promise<Permissao[]> {
    return await this.prisma.permissao.findMany();
  }

  async update(id: number, data: Partial<PermissaoBody>): Promise<Permissao> {
    return await this.prisma.permissao.update({
      where: { id },
      data: { ...data },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.permissao.delete({
      where: { id },
    });
  }
}
