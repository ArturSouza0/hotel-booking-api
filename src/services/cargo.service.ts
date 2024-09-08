import { Injectable } from '@nestjs/common';
import { CargoBody } from 'src/dtos/criar-cargo';
import { CargoRepository } from 'src/repositories/cargo-repository';

@Injectable()
export class CargoService {
  constructor(private readonly cargoRepository: CargoRepository) {}

  async create(body: CargoBody) {
    return this.cargoRepository.create(body);
  }

  async findById(id: number) {
    return this.cargoRepository.findById(id);
  }

  async findAll() {
    return this.cargoRepository.findAll();
  }

  async update(id: number, body: Partial<CargoBody>) {
    return this.cargoRepository.update(id, body);
  }

  async delete(id: number) {
    return this.cargoRepository.delete(id);
  }
}
