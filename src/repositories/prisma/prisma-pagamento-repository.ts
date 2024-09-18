import { Injectable } from '@nestjs/common';
import { PagamentoRepository } from '../pagamento-repository';
import { PrismaService } from 'src/database/prisma.service';
import { PagamentoBody } from 'src/dtos/criar-pagamento';
import { Pagamento } from 'src/entities/pagamento-entity';

@Injectable()
export class PrismaPagamentoRepository implements PagamentoRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: PagamentoBody): Promise<Pagamento> {
    return await this.prisma.pagamento.create({
      data: {
        ...data,
      },
    });
  }

  async findById(id: number): Promise<Pagamento | null> {
    const pagamento = await this.prisma.pagamento.findUnique({
      where: { id },
    });
    return pagamento;
  }

  async findAll(): Promise<Pagamento[]> {
    return await this.prisma.pagamento.findMany();
  }

  async update(id: number, data: Partial<PagamentoBody>): Promise<Pagamento> {
    return await this.prisma.pagamento.update({
      where: { id },
      data: { ...data },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.pagamento.delete({
      where: { id },
    });
  }
}
