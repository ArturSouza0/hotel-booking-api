import { TipoPagamentoBody } from "src/dtos/criar-tipo-pagamento";
import { TipoPagamentoRepository } from "../tipo-pagamento-repository";
import { TipoPagamento } from "src/entities/tipo-pagamento-entity";
import { PrismaService } from "src/database/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaTipoPagamentoRepository implements TipoPagamentoRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: TipoPagamentoBody): Promise<TipoPagamento> {
    return await this.prisma.tipo_pagamento.create({
      data: {
        ...data,
      },
    });
  }

  async findById(id: number): Promise<TipoPagamento | null> {
    const tipoPagamento = await this.prisma.tipo_pagamento.findUnique({
      where: { id },
    });
    return tipoPagamento;
  }

  async findAll(): Promise<TipoPagamento[]> {
    return await this.prisma.tipo_pagamento.findMany();
  }

  async update(id: number, data: Partial<TipoPagamentoBody>): Promise<TipoPagamento> {
    return await this.prisma.tipo_pagamento.update({
      where: { id },
      data: { ...data },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.tipo_pagamento.delete({
      where: { id },
    });
  }
  
}