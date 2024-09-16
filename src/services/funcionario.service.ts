import { Injectable } from '@nestjs/common';
import { FuncionarioBody } from 'src/dtos/criar-funcionarios';
import { FuncionarioRepository } from 'src/repositories/funcionario-repository';

@Injectable()
export class FuncionarioService {
  constructor(private readonly funcionarioRepository: FuncionarioRepository) {}

  async create(body: FuncionarioBody) {
    return await this.funcionarioRepository.create(body);
  }

  async findById(id: number) {
    return await this.funcionarioRepository.findById(id);
  }

  async findAll() {
    return await this.funcionarioRepository.findAll();
  }

  async update(id: number, body: Partial<FuncionarioBody>) {
    return await this.funcionarioRepository.update(id, body);
  }

  async delete(id: number) {
    return await this.funcionarioRepository.delete(id);
  }
}
