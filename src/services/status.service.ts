import { Injectable } from '@nestjs/common';
import { StatusBody } from 'src/dtos/criar-status';
import { StatusRepository } from 'src/repositories/status-repository';

@Injectable()
export class StatusService {
  constructor(private readonly statusRepository: StatusRepository) {}

  async create(body: StatusBody) {
    return await this.statusRepository.create(body);
  }

  async findById(id: number) {
    return await this.statusRepository.findById(id);
  }

  async findAll() {
    return await this.statusRepository.findAll();
  }

  async update(id: number, body: Partial<StatusBody>) {
    return await this.statusRepository.update(id, body);
  }

  async delete(id: number) {
    return await this.statusRepository.delete(id);
  }
}
