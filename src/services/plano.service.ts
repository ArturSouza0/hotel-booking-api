import { Injectable } from "@nestjs/common";
import { PlanoBody } from "src/dtos/criar-plano";
import { PlanoRepository } from "src/repositories/plano-repository";

@Injectable()
export class PlanoService {
    constructor(private readonly planoRepository: PlanoRepository) { }

    async create(body: PlanoBody) {
        return await this.planoRepository.create(body);
    }

    async findById(id: number) {
        return await this.planoRepository.findById(id);
    }

    async findAll() {
        return await this.planoRepository.findAll();
    }

    async update(id: number, body: Partial<PlanoBody>) {
        return await this.planoRepository.update(id, body);
    }

    async delete(id: number) {
        return await this.planoRepository.delete(id);
    }
}