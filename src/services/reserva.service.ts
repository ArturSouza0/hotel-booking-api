import { Injectable } from '@nestjs/common';
import { ReservaBody } from 'src/dtos/criar-reserva';
import { ReservaRepository } from 'src/repositories/reserva-repository';

@Injectable()
export class ReservaService {
  constructor(private readonly reservaRepository: ReservaRepository) {}

  async create(body: ReservaBody) {
    return await this.reservaRepository.create(body);
  }

  async findById(id: number) {
    return await this.reservaRepository.findById(id);
  }

  async findAll() {
    return await this.reservaRepository.findAll();
  }

  async update(id: number, body: Partial<ReservaBody>) {
    return await this.reservaRepository.update(id, body);
  }

  async delete(id: number) {
    return await this.reservaRepository.delete(id);
  }
}
