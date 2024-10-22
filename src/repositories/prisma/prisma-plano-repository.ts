import { Injectable } from '@nestjs/common';
import { PlanoRepository } from '../plano-repository';
import { PrismaService } from 'src/database/prisma.service';
import { PlanoBody } from 'src/dtos/criar-plano';
import { Plano } from 'src/entities/plano-entity';

@Injectable()
export class PrismaPlanoRepository implements PlanoRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: PlanoBody): Promise<Plano> {
    return await this.prisma.plano.create({
      data: { ...data },
    });
  }

  async findById(id: number): Promise<Plano> {
    const plano = await this.prisma.plano.findUnique({
      where: { id },
    });
    return plano;
  }

  async findAll(): Promise<Plano[]> {
    return await this.prisma.plano.findMany();
  }

  async update(id: number, data: Partial<PlanoBody>): Promise<Plano> {
    return await this.prisma.plano.update({
      where: { id },
      data: { ...data },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.plano.delete({
      where: { id },
    });
  }
}
