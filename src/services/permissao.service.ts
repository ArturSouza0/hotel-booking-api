import { Injectable } from '@nestjs/common';
import { PermissaoBody } from 'src/dtos/criar-permissao';
import { PermissaoRepository } from 'src/repositories/permissao-repository';

@Injectable()
export class PermissaoService {
  constructor(private readonly permissaoRepository: PermissaoRepository) {}

  async create(body: PermissaoBody) {
    return this.permissaoRepository.create(body);
  }

  async findById(id: number) {
    return this.permissaoRepository.findById(id);
  }

  async findAll() {
    return this.permissaoRepository.findAll();
  }

  async update(id: number, body: Partial<PermissaoBody>) {
    return this.permissaoRepository.update(id, body);
  }

  async delete(id: number) {
    return this.permissaoRepository.delete(id);
  }
}
