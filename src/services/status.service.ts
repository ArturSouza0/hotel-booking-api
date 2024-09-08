import { Injectable } from '@nestjs/common';
import { StatusBody } from 'src/dtos/criar-status';
import { StatusRepository } from 'src/repositories/status-repository';

@Injectable()
export class StatusService {
  constructor(private readonly statusRepository: StatusRepository) {}

  async create(body: StatusBody) {
    return this.statusRepository.create(body);
  }

  async findById(id: number) {
    return this.statusRepository.findById(id);
  }

  async findAll() {
    return this.statusRepository.findAll();
  }

  async update(id: number, body: Partial<StatusBody>) {
    return this.statusRepository.update(id, body);
  }

  async delete(id: number) {
    return this.statusRepository.delete(id);
  }
}
