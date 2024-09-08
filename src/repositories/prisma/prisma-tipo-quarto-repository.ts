import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TipoQuartoRepository } from '../tipo-quarto-repository';
import { TipoQuartoBody } from 'src/dtos/criar-tipo-quarto';
import { TipoQuarto } from 'src/entities/tipo-quarto-entity';

@Injectable()
export class PrismaTipoQuartoRepository implements TipoQuartoRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: TipoQuartoBody): Promise<TipoQuarto> {
    return await this.prisma.tipo_quarto.create({
      data: {
        ...data,
      },
    });
  }

  async findById(id: number): Promise<TipoQuarto | null> {
    const tipoQuarto = await this.prisma.tipo_quarto.findUnique({
      where: { id },
    });
    return tipoQuarto;
  }

  async findAll(): Promise<TipoQuarto[]> {
    return await this.prisma.tipo_quarto.findMany();
  }

  async update(id: number, data: Partial<TipoQuartoBody>): Promise<TipoQuarto> {
    return await this.prisma.tipo_quarto.update({
      where: { id },
      data: {
        ...data,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.tipo_quarto.delete({
      where: { id },
    });
  }
}
