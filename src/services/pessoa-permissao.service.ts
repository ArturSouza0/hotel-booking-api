import { Injectable } from "@nestjs/common";
import { PessoaPermissaoBody } from "src/dtos/criar-pessoa-permissao";
import { PessoaPermissaoRepository } from "src/repositories/pessoa-permissao-repository";

@Injectable()
export class PessoaPermissaoService {
    constructor(private readonly pessoaPermissaoRepository: PessoaPermissaoRepository) {}

    async create(body: PessoaPermissaoBody) {
        return await this.pessoaPermissaoRepository.create(body);
    }

    async findById(id: number) {
        return await this.pessoaPermissaoRepository.findById(id);
    }

    async findAll() {
        return await this.pessoaPermissaoRepository.findAll();
    }

    async update(id: number, body: Partial<PessoaPermissaoBody>) {
        return await this.pessoaPermissaoRepository.update(id, body);
    }

    async delete(id: number) {
        return await this.pessoaPermissaoRepository.delete(id);
    }
}