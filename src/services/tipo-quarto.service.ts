import { Injectable } from '@nestjs/common';
import { TipoQuartoBody } from 'src/dtos/criar-tipo-quarto';
import { TipoQuartoRepository } from 'src/repositories/tipo-quarto-repository';

@Injectable()
export class TipoQuartoService {
  constructor(private readonly tipoQuartoRepository: TipoQuartoRepository) {}

  async create(body: TipoQuartoBody) {
    return await this.tipoQuartoRepository.create(body);
  }

  async findById(id: number) {
    return await this.tipoQuartoRepository.findById(id);
  }

  async findAll() {
    return await this.tipoQuartoRepository.findAll();
  }

  async update(id: number, body: Partial<TipoQuartoBody>) {
    return await this.tipoQuartoRepository.update(id, body);
  }

  async delete(id: number) {
    return await this.tipoQuartoRepository.delete(id);
  }
}
