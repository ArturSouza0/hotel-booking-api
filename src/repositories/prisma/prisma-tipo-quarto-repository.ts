import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Decimal } from '@prisma/client/runtime/library';
import { TipoQuartoRepository } from '../tipo-quarto-repository';
import { TipoQuartoBody } from 'src/dtos/criar-tipo-quarto';

@Injectable()
export class PrismaTipoQuartoRepository implements TipoQuartoRepository {
  constructor(private prisma: PrismaService) {}

  async create(descricao: string, preco_diaria: number): Promise<void> {
    await this.prisma.tipo_quarto.create({
      data: {
        descricao,
        preco_diaria: new Decimal(preco_diaria),
      },
    });
  }

  async findAll(): Promise<TipoQuartoBody[]> {
    const tiposDeQuarto = await this.prisma.tipo_quarto.findMany();
    return tiposDeQuarto.map((tipo) => ({
      id: tipo.id,
      descricao: tipo.descricao,
      preco_diaria: tipo.preco_diaria.toNumber(),
    }));
  }

  async findById(id: number): Promise<TipoQuartoBody | null> {
    const tipo = await this.prisma.tipo_quarto.findUnique({
      where: { id },
    });

    if (!tipo) return null;

    return {
      id: tipo.id,
      descricao: tipo.descricao,
      preco_diaria: tipo.preco_diaria.toNumber(),
    };
  }

  async update(
    id: number,
    descricao: string,
    preco_diaria: number,
  ): Promise<void> {
    await this.prisma.tipo_quarto.update({
      where: { id },
      data: { descricao, preco_diaria: new Decimal(preco_diaria) },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.tipo_quarto.delete({
      where: { id },
    });
  }
}
