import { Injectable } from "@nestjs/common";
import { ClienteBody } from "src/dtos/criar-cliente";
import { ClienteRepository } from "src/repositories/cliente-repository";

@Injectable()
export class ClienteService {
    constructor(private readonly clienteRepository: ClienteRepository) { }

    async create(body: ClienteBody) {
        return await this.clienteRepository.create(body);
    }

    async update(id: number, body: ClienteBody) {
        return await this.clienteRepository.update(id, body)
    }

    async findById(id: number) {
        return await this.clienteRepository.findById(id);
    }

    async findAll() {
        return await this.clienteRepository.findAll();
    }

    async delete(id: number) {
        return await this.clienteRepository.delete(id)
    }
}