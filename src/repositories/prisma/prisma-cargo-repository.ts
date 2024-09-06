import { PrismaService } from 'src/database/prisma.service';
import { CargoRepository } from '../cargo-repository';
import { Injectable } from '@nestjs/common';
import { CargoBody } from 'src/dtos/criar-cargo';

@Injectable()
export class PrismaCargoRepository implements CargoRepository {
  constructor(private prisma: PrismaService) {}

  async create(descricao: string): Promise<void> {
    await this.prisma.cargo.create({
      data: {
        descricao,
      },
    });
  }

  async findAll(): Promise<CargoBody[]> {
    return this.prisma.cargo.findMany();
  }

  async findById(id: number): Promise<CargoBody | null> {
    return this.prisma.cargo.findUnique({
      where: { id },
    });
  }

  async update(id: number, descricao: string): Promise<void> {
    await this.prisma.cargo.update({
      where: { id },
      data: { descricao },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.cargo.delete({
      where: { id },
    });
  }
}
