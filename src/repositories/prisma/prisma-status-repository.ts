import { PrismaService } from 'src/database/prisma.service';
import { StatusRepository } from '../status-repository';
import { StatusBody } from 'src/dtos/criar-status';
import { Injectable } from '@nestjs/common';
import { Status } from 'src/entities/status-entity';

@Injectable()
export class PrismaStatusRepository implements StatusRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: StatusBody): Promise<Status> {
    const existingStatus = await this.prisma.status.findUnique({
      where: { descricao: data.descricao },
    });

    if (existingStatus) {
      throw new Error(`A descrição do status ${data.descricao} já existe.`);
    }

    return await this.prisma.status.create({
      data: {
        ...data,
      },
    });
  }

  async findById(id: number): Promise<Status | null> {
    const status = await this.prisma.status.findUnique({
      where: { id },
    });
    return status;
  }

  async findAll(): Promise<Status[]> {
    return await this.prisma.status.findMany();
  }

  async update(id: number, data: Partial<StatusBody>): Promise<Status> {
    return await this.prisma.status.update({
      where: { id },
      data: { ...data },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.status.delete({
      where: { id },
    });
  }
}
