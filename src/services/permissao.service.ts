import { Injectable } from '@nestjs/common';
import { PermissaoBody } from 'src/dtos/criar-permissao';
import { PermissaoRepository } from 'src/repositories/permissao-repository';

@Injectable()
export class PermissaoService {
  constructor(private readonly permissaoRepository: PermissaoRepository) {}

  async create(body: PermissaoBody) {
    return await this.permissaoRepository.create(body);
  }

  async findById(id: number) {
    return await this.permissaoRepository.findById(id);
  }

  async findAll() {
    return await this.permissaoRepository.findAll();
  }

  async update(id: number, body: Partial<PermissaoBody>) {
    return await this.permissaoRepository.update(id, body);
  }

  async delete(id: number) {
    return await this.permissaoRepository.delete(id);
  }
}
