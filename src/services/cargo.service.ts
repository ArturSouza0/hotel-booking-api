import { Injectable } from '@nestjs/common';
import { CargoBody } from 'src/dtos/criar-cargo';
import { CargoRepository } from 'src/repositories/cargo-repository';

@Injectable()
export class CargoService {
  constructor(private readonly cargoRepository: CargoRepository) {}

  async create(body: CargoBody) {
    return await this.cargoRepository.create(body);
  }

  async findById(id: number) {
    return await this.cargoRepository.findById(id);
  }

  async findAll() {
    return await this.cargoRepository.findAll();
  }

  async update(id: number, body: Partial<CargoBody>) {
    return await this.cargoRepository.update(id, body);
  }

  async delete(id: number) {
    return await this.cargoRepository.delete(id);
  }
}
