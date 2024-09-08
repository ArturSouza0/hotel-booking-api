import { Injectable } from '@nestjs/common';
import { TipoQuartoBody } from 'src/dtos/criar-tipo-quarto';
import { TipoQuartoRepository } from 'src/repositories/tipo-quarto-repository';

@Injectable()
export class TipoQuartoService {
  constructor(private readonly tipoQuartoRepository: TipoQuartoRepository) {}

  async create(body: TipoQuartoBody) {
    return this.tipoQuartoRepository.create(body);
  }

  async findById(id: number) {
    return this.tipoQuartoRepository.findById(id);
  }

  async findAll() {
    return this.tipoQuartoRepository.findAll();
  }

  async update(id: number, body: Partial<TipoQuartoBody>) {
    return this.tipoQuartoRepository.update(id, body);
  }

  async delete(id: number) {
    return this.tipoQuartoRepository.delete(id);
  }
}
