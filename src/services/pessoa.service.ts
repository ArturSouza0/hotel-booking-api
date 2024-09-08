import { Injectable } from '@nestjs/common';
import { PessoaBody } from 'src/dtos/criar-pessoa';
import { PessoaRepository } from 'src/repositories/pessoa-repository';

@Injectable()
export class PessoaService {
  constructor(private readonly pessoaRepository: PessoaRepository) {}

  async createPessoa(body: PessoaBody) {
    return this.pessoaRepository.create(body);
  }

  async updatePessoa(id: number, body: PessoaBody) {
    return this.pessoaRepository.update(id, body);
  }

  async getPessoaById(id: number) {
    return this.pessoaRepository.findById(id);
  }

  async getAllPessoas() {
    return this.pessoaRepository.findAll();
  }

  async deletePessoa(id: number) {
    await this.pessoaRepository.delete(id);
    return { message: 'Pessoa deletada com sucesso!' };
  }
}
