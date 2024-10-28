import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ReservaBody } from 'src/dtos/criar-reserva';
import { Reserva } from 'src/entities/reserva-entity';
import { ReservaRepository } from '../reserva-repository';

@Injectable()
export class PrismaReservaRepository implements ReservaRepository {
  constructor(private prisma: PrismaService) {}

  private readonly ID_STATUS_DISPONIVEL = 1;
  private readonly STATUS_RESERVADO_ID = 3;

  async create(data: ReservaBody): Promise<Reserva> {
    if (data.data_checkout <= data.data_checkin) {
      throw new Error(
        'A data de checkout deve ser posterior à data de check-in',
      );
    }

    const roomStatus = await this.prisma.quarto.findUnique({
      where: { id: data.quarto_id },
      select: { Status: { select: { id: true } } },
    });

    if (!roomStatus || roomStatus.Status.id !== this.ID_STATUS_DISPONIVEL) {
      throw new Error('Quarto não está disponível para reserva');
    }

    const existingReservation = await this.prisma.reserva.findFirst({
      where: {
        quarto_id: data.quarto_id,
        OR: [
          {
            data_checkin: { lte: data.data_checkout },
            data_checkout: { gte: data.data_checkin },
          },
        ],
      },
    });

    if (existingReservation) {
      throw new Error('Quarto indisponível para as datas selecionadas');
    }

    const reserva = await this.prisma.reserva.create({
      data: {
        ...data,
        status_id: this.STATUS_RESERVADO_ID,
      },
    });

    await this.prisma.quarto.update({
      where: { id: data.quarto_id },
      data: { Status: { connect: { id: this.STATUS_RESERVADO_ID } } },
    });

    return reserva;
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
    const reserva = await this.prisma.reserva.findUnique({
      where: { id },
      select: { quarto_id: true },
    });

    if (!reserva) {
      throw new Error('Reserva não encontrada');
    }

    await this.prisma.reserva.delete({
      where: { id },
    });

    await this.prisma.quarto.update({
      where: { id: reserva.quarto_id },
      data: { Status: { connect: { id: this.ID_STATUS_DISPONIVEL } } },
    });
  }
}
