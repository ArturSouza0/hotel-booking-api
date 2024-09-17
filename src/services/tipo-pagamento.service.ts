import { Injectable } from "@nestjs/common";
import { TipoPagamentoBody } from "src/dtos/criar-tipo-pagamento";
import { TipoPagamentoRepository } from "src/repositories/tipo-pagamento-repository";

@Injectable()
export class TipoPagamentoService {
  constructor(private readonly tipoPagamentoRepository: TipoPagamentoRepository) {}

  async create(body: TipoPagamentoBody) {
    return await this.tipoPagamentoRepository.create(body);
  }

  async findById(id: number) {
    return await this.tipoPagamentoRepository.findById(id);
  }

  async findAll() {
    return await this.tipoPagamentoRepository.findAll();
  }

  async update(id: number, body: Partial<TipoPagamentoBody>) {
    return await this.tipoPagamentoRepository.update(id, body);
  }

  async delete(id: number) {
    return await this.tipoPagamentoRepository.delete(id);
  }
}