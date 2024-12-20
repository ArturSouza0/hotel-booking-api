import { Injectable } from '@nestjs/common';
import { QuartoRepository } from '../quarto-repository';
import { PrismaService } from 'src/database/prisma.service';
import { QuartoBody } from 'src/dtos/criar-quarto';
import { Quarto } from 'src/entities/quarto-entity';

@Injectable()
export class PrismaQuartoRepository implements QuartoRepository {
  constructor(private prisma: PrismaService) {}
  private readonly ID_STATUS_DISPONIVEL = 1;

  async create(data: QuartoBody): Promise<Quarto> {
    const existingQuarto = await this.prisma.quarto.findUnique({
      where: { numero: data.numero },
    });

    if (existingQuarto) {
      throw new Error(`O quarto com número ${data.numero} já existe.`);
    }

    return this.prisma.quarto.create({
      data: {
        ...data,
        id_status: this.ID_STATUS_DISPONIVEL,
      },
    });
  }

  async findById(id: number): Promise<Quarto | null> {
    const quarto = await this.prisma.quarto.findUnique({
      where: { id },
    });
    return quarto;
  }

  async findAll(): Promise<Quarto[]> {
    return await this.prisma.quarto.findMany();
  }

  async update(id: number, data: Partial<QuartoBody>): Promise<Quarto> {
    return await this.prisma.quarto.update({
      where: { id },
      data: { ...data },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.quarto.delete({
      where: { id },
    });
  }
}
