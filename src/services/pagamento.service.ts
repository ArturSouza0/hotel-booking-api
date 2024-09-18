import { Injectable } from '@nestjs/common';
import { PagamentoBody } from 'src/dtos/criar-pagamento';
import { PagamentoRepository } from 'src/repositories/pagamento-repository';

@Injectable()
export class PagamentoService {
  constructor(private readonly pagamentoRepository: PagamentoRepository) {}

  async create(body: PagamentoBody) {
    return await this.pagamentoRepository.create(body);
  }

  async findById(id: number) {
    return await this.pagamentoRepository.findById(id);
  }

  async findAll() {
    return await this.pagamentoRepository.findAll();
  }

  async update(id: number, body: Partial<PagamentoBody>) {
    return await this.pagamentoRepository.update(id, body);
  }

  async delete(id: number) {
    return await this.pagamentoRepository.delete(id);
  }
}
