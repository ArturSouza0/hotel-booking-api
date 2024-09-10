import { Injectable } from '@nestjs/common';
import { PessoaBody } from 'src/dtos/criar-pessoa';
import { PessoaRepository } from 'src/repositories/pessoa-repository';

@Injectable()
export class PessoaService {
  constructor(private readonly pessoaRepository: PessoaRepository) {}

  async create(body: PessoaBody) {
    return await this.pessoaRepository.create(body);
  }

  async update(id: number, body: PessoaBody) {
    return await this.pessoaRepository.update(id, body);
  }

  async findById(id: number) {
    return await this.pessoaRepository.findById(id);
  }

  async findAll() {
    return await this.pessoaRepository.findAll();
  }

  async delete(id: number) {
    return await this.pessoaRepository.delete(id);
  }
}
