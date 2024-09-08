import { PrismaService } from 'src/database/prisma.service';
import { CargoRepository } from '../cargo-repository';
import { Injectable } from '@nestjs/common';
import { CargoBody } from 'src/dtos/criar-cargo';
import { Cargo } from 'src/entities/cargo-entity';

@Injectable()
export class PrismaCargoRepository implements CargoRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CargoBody): Promise<Cargo> {
    return await this.prisma.cargo.create({
      data: {
        ...data,
      },
    });
  }

  async findById(id: number): Promise<Cargo | null> {
    const status = await this.prisma.cargo.findUnique({
      where: { id },
    });
    return status;
  }

  async findAll(): Promise<Cargo[]> {
    return await this.prisma.cargo.findMany();
  }

  async update(id: number, data: Partial<CargoBody>): Promise<Cargo> {
    return await this.prisma.cargo.update({
      where: { id },
      data: { ...data },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.cargo.delete({
      where: { id },
    });
  }
}
