import { PrismaService } from "src/database/prisma.service";
import { StatusRepository } from "../status-repository";
import { StatusBody } from "src/dtos/criar-status";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaStatusRepository implements StatusRepository {
  constructor(private prisma: PrismaService) {}

  async create(descricao: string): Promise<void> {
    await this.prisma.status.create({
      data: {
        descricao,
      },
    });
  }

  async findAll(): Promise<StatusBody[]> {
    return this.prisma.status.findMany();
  }

  async findById(id: number): Promise<StatusBody | null> {
    return this.prisma.status.findUnique({
      where: { id },
    });
  }

  async update(id: number, descricao: string): Promise<void> {
    await this.prisma.status.update({
      where: { id },
      data: { descricao },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.status.delete({
      where: { id },
    });
  }
}