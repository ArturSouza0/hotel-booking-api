import { Injectable } from '@nestjs/common';
import { PlanoServicoBody } from 'src/dtos/criar-plano-servico';
import { PlanoServicoRepository } from 'src/repositories/plano-servico-repository';

@Injectable()
export class PlanoServicoService {
  constructor(
    private readonly planoServicoRepository: PlanoServicoRepository,
  ) {}

  async create(body: PlanoServicoBody) {
    return await this.planoServicoRepository.create(body);
  }

  async update(id: number, body: PlanoServicoBody) {
    return await this.planoServicoRepository.update(id, body);
  }

  async findById(id: number) {
    return await this.planoServicoRepository.findById(id);
  }

  async findAll() {
    return await this.planoServicoRepository.findAll();
  }

  async delete(id: number) {
    return await this.planoServicoRepository.delete(id);
  }
}
