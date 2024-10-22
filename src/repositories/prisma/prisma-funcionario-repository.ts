import { Injectable } from '@nestjs/common';
import { FuncionarioRepository } from '../funcionario-repository';
import { PrismaService } from 'src/database/prisma.service';
import { FuncionarioBody } from 'src/dtos/criar-funcionarios';
import { Funcionario } from 'src/entities/funcionario-entity';

@Injectable()
export class PrismaFuncionarioRepository implements FuncionarioRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: FuncionarioBody): Promise<Funcionario> {
    return await this.prisma.funcionario.create({
      data: {
        ...data,
      },
    });
  }

  async findById(id: number): Promise<Funcionario | null> {
    const funcionario = await this.prisma.funcionario.findUnique({
      where: { id },
    });
    return funcionario;
  }

  async findAll(): Promise<Funcionario[]> {
    return await this.prisma.funcionario.findMany();
  }

  async update(
    id: number,
    data: Partial<FuncionarioBody>,
  ): Promise<Funcionario> {
    return await this.prisma.funcionario.update({
      where: { id },
      data: { ...data },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.funcionario.delete({
      where: { id },
    });
  }
}
