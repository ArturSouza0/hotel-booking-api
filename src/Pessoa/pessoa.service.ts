import { Injectable } from '@nestjs/common';
import { PessoaBody } from 'src/dtos/criar-pessoa';
import { PessoaRepository } from 'src/repositories/pessoa-repository';

@Injectable()
export class PessoaService {
  constructor(private readonly pessoaRepository: PessoaRepository) {}

  async create(body: PessoaBody) {
    const novaPessoa = await this.pessoaRepository.create(body);

    await this.atribuirPermissao(novaPessoa.id);

    return novaPessoa;
  }

  private async atribuirPermissao(pessoaId: number) {
    const clientePermissao =
      await this.pessoaRepository.findPermissaoByNome('cliente');

    if (clientePermissao) {
      await this.pessoaRepository.addPermissaoToPessoa(
        pessoaId,
        clientePermissao.id,
      );
    }
  }

  async update(id: number, body: Partial<PessoaBody>) {
    return await this.pessoaRepository.update(id, body);
  }

  async findById(id: number) {
    return await this.pessoaRepository.findById(id);
  }

  async findByEmail(email: string) {
    return await this.pessoaRepository.findByEmail(email);
  }

  async findAll() {
    return await this.pessoaRepository.findAll();
  }

  async delete(id: number) {
    return await this.pessoaRepository.delete(id);
  }
}
