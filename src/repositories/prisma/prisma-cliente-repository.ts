import { Injectable } from "@nestjs/common";
import { ClienteRepository } from "../cliente-repository";
import { PrismaService } from "src/database/prisma.service";
import { ClienteBody } from "src/dtos/criar-cliente";
import { Cliente } from "src/entities/cliente-entity";

@Injectable()
export class PrismaClienteRepository implements ClienteRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: ClienteBody): Promise<Cliente> {
        return await this.prisma.clientes.create({
            data: {
                ...data,
            }
        })
    }

    async findById(id: number): Promise<Cliente> {
        const cliente = await this.prisma.clientes.findUnique({
            where: { id },
        })
        return cliente;
    }

    async findAll(): Promise<Cliente[]> {
        return await this.prisma.clientes.findMany();
    }

    async update(id: number, data: Partial<ClienteBody>): Promise<Cliente> {
        return await this.prisma.clientes.update({
            where: { id },
            data: { ...data }
        })
    }

    async delete(id: number): Promise<void> {
        await this.prisma.clientes.delete({
            where: { id }
        })
    }

}