import { PrismaService } from 'src/database/prisma.service';
import { PlanoServicoRepository } from '../plano-servico-repository';
import { PlanoServicoBody } from 'src/dtos/criar-plano-servico';
import { PlanoServico } from 'src/entities/plano-servico-entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaPlanoServicoRepository implements PlanoServicoRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: PlanoServicoBody): Promise<PlanoServico> {
    return await this.prisma.plano_servico.create({
      data: {
        ...data,
      },
    });
  }

  async findById(id: number): Promise<PlanoServico> {
    const planoServico = await this.prisma.plano_servico.findUnique({
      where: { id },
    });
    return planoServico;
  }

  async findAll(): Promise<PlanoServico[]> {
    return await this.prisma.plano_servico.findMany();
  }

  async update(
    id: number,
    data: Partial<PlanoServicoBody>,
  ): Promise<PlanoServico> {
    return await this.prisma.plano_servico.update({
      where: { id },
      data: { ...data },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.plano_servico.delete({
      where: { id },
    });
  }
}
