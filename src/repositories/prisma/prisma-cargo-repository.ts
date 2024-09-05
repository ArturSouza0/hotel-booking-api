import { PrismaService } from 'src/database/prisma.service';
import { CargoRepository } from '../cargo-repository';
import { Injectable } from '@nestjs/common';

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
}
