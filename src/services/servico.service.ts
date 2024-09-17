import { Injectable } from "@nestjs/common";
import { ServicoBody } from "src/dtos/criar-servico";
import { ServicoRepository } from "src/repositories/servico-repository";

@Injectable()
export class ServicoService {
    constructor(private readonly servicoRepository: ServicoRepository) {}

    async create(body: ServicoBody) {
        return await this.servicoRepository.create(body);
    }

    async findById(id: number) {
        return await this.servicoRepository.findById(id);
    }

    async findAll() {
        return await this.servicoRepository.findAll();
    }

    async update(id: number, body: Partial<ServicoBody>) {
        return await this.servicoRepository.update(id, body);
    }

    async delete(id: number) {
        return await this.servicoRepository.delete(id);
    }
}