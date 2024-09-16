import { Injectable } from '@nestjs/common';
import { QuartoBody } from 'src/dtos/criar-quarto';
import { QuartoRepository } from 'src/repositories/quarto-repository';

@Injectable()
export class QuartoService {
  constructor(private readonly quartoRepository: QuartoRepository) {}

  async create(body: QuartoBody) {
    return await this.quartoRepository.create(body);
  }

  async findById(id: number) {
    return await this.quartoRepository.findById(id);
  }

  async findAll() {
    return await this.quartoRepository.findAll();
  }

  async update(id: number, body: Partial<QuartoBody>) {
    return await this.quartoRepository.update(id, body);
  }

  async delete(id: number) {
    return await this.quartoRepository.delete(id);
  }
}
