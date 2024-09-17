import { Injectable } from "@nestjs/common";
import { ServicoRepository } from "../servico-repository";
import { PrismaService } from "src/database/prisma.service";
import { Servico } from "src/entities/servico-entity";
import { ServicoBody } from "src/dtos/criar-servico";

@Injectable()
export class PrismaServicoRepository implements ServicoRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: ServicoBody): Promise<Servico> {
        return await this.prisma.servicos.create({
          data: {
            ...data,
          },
        });
      }
    
      async findById(id: number): Promise<Servico | null> {
        const servico = await this.prisma.servicos.findUnique({
          where: { id },
        });
        return servico;
      }
    
      async findAll(): Promise<Servico[]> {
        return await this.prisma.servicos.findMany();
      }
    
      async update(id: number, data: Partial<ServicoBody>): Promise<Servico> {
        return await this.prisma.servicos.update({
          where: { id },
          data: { ...data },
        });
      }
    
      async delete(id: number): Promise<void> {
        await this.prisma.servicos.delete({
          where: { id },
        });
      }
}