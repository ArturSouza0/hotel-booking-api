import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ReservaBody } from 'src/dtos/criar-reserva';
import { Reserva } from 'src/entities/reserva-entity';
import { ReservaRepository } from '../reserva-repository';

@Injectable()
export class PrismaReservaRepository implements ReservaRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: ReservaBody): Promise<Reserva> {
    return await this.prisma.reserva.create({
      data: {
        ...data,
      },
    });
  }

  async findById(id: number): Promise<Reserva | null> {
    const reserva = await this.prisma.reserva.findUnique({
      where: { id },
    });
    return reserva;
  }

  async findAll(): Promise<Reserva[]> {
    return await this.prisma.reserva.findMany();
  }

  async update(id: number, data: Partial<ReservaBody>): Promise<Reserva> {
    return await this.prisma.reserva.update({
      where: { id },
      data: { ...data },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.reserva.delete({
      where: { id },
    });
  }
}
