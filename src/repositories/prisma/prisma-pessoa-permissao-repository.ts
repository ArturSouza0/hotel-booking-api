import { Injectable } from "@nestjs/common";
import { PessoaPermissaoRepository } from "../pessoa-permissao-repository";
import { PrismaService } from "src/database/prisma.service";
import { PessoaPermissaoBody } from "src/dtos/criar-pessoa-permissao";
import { PessoaPermissao } from "src/entities/pessoa-permissao-entity";

@Injectable()
export class PrismaPessoaPermissaoRepository implements PessoaPermissaoRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: PessoaPermissaoBody): Promise<PessoaPermissao> {
        return await this.prisma.pessoa_permissao.create({
            data: { ...data },
        });
    }

    async findById(id: number): Promise<PessoaPermissao> {
        const pessoaPermissao = await this.prisma.pessoa_permissao.findUnique({
            where: { id }
        });
        return pessoaPermissao;
    }

    async findAll(): Promise<PessoaPermissao[]> {
        return await this.prisma.pessoa_permissao.findMany();
    }

    async update(id: number, data: Partial<PessoaPermissaoBody>): Promise<PessoaPermissao> {
        return await this.prisma.pessoa_permissao.update({
            where: { id },
            data: { ...data }
        });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.pessoa_permissao.delete({
            where: { id },
        });
    }
}