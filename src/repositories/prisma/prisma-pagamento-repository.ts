import { BadRequestException, Injectable } from '@nestjs/common';
import { PagamentoRepository } from '../pagamento-repository';
import { PrismaService } from 'src/database/prisma.service';
import { PagamentoBody } from 'src/dtos/criar-pagamento';
import { Pagamento } from 'src/entities/pagamento-entity';

@Injectable()
export class PrismaPagamentoRepository implements PagamentoRepository {
  constructor(private prisma: PrismaService) {}

  private readonly ID_PAGAMENTO_CREDITO = 1;
  private readonly ID_PAGAMENTO_DEBITO = 2;
  private readonly ID_PAGAMENTO_AVISTA = 3;
  private readonly ID_PAGAMENTO_PIX = 4;

  async create(data: PagamentoBody): Promise<Pagamento> {
    const valorInicial = await this.getReservaComValores(data.reserva_id);
    const tipoPagamento = await this.getTipoPagamento(data.tipo_pagamento_id);
    const valorTotal = this.calcularValorTotal(valorInicial, tipoPagamento.id);

    return await this.prisma.pagamento.create({
      data: {
        ...data,
        valor: valorTotal,
        data_pagamento: new Date(),
      },
    });
  }

  async findById(id: number): Promise<Pagamento | null> {
    return await this.prisma.pagamento.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<Pagamento[]> {
    return await this.prisma.pagamento.findMany();
  }

  async update(id: number, data: Partial<PagamentoBody>): Promise<Pagamento> {
    const valorInicial = await this.getReservaComValores(data.reserva_id);
    const tipoPagamento = await this.getTipoPagamento(data.tipo_pagamento_id);
    const valorTotal = this.calcularValorTotal(valorInicial, tipoPagamento.id);

    return await this.prisma.pagamento.update({
      where: { id },
      data: { ...data, valor: valorTotal },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.pagamento.delete({
      where: { id },
    });
  }

  private async getReservaComValores(reservaId: number): Promise<number> {
    const reserva = await this.prisma.reserva.findUnique({
      where: { id: reservaId },
      include: {
        Plano: true,
        Quarto: {
          include: {
            TipoQuarto: true,
          },
        },
      },
    });

    if (!reserva) {
      throw new BadRequestException('Reserva não encontrada.');
    }

    return reserva.Plano.preco
      .plus(reserva.Quarto.TipoQuarto.preco_diaria)
      .toNumber();
  }

  private async getTipoPagamento(tipoPagamentoId: number) {
    const tipoPagamento = await this.prisma.tipoPagamento.findUnique({
      where: { id: tipoPagamentoId },
    });

    if (!tipoPagamento) {
      throw new BadRequestException('Tipo de pagamento inválido.');
    }

    return tipoPagamento;
  }

  private calcularValorTotal(
    valorInicial: number,
    tipoPagamentoId: number,
  ): number {
    switch (tipoPagamentoId) {
      case this.ID_PAGAMENTO_AVISTA:
      case this.ID_PAGAMENTO_PIX:
        return valorInicial * 0.85;
      case this.ID_PAGAMENTO_DEBITO:
        return valorInicial * 0.9;
      case this.ID_PAGAMENTO_CREDITO:
        return valorInicial * 1.05;
      default:
        return valorInicial;
    }
  }
}
