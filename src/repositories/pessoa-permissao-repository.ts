import { PessoaPermissaoBody } from 'src/dtos/criar-pessoa-permissao';
import { PessoaPermissao } from 'src/entities/pessoa-permissao-entity';

export abstract class PessoaPermissaoRepository {
  abstract create(data: PessoaPermissaoBody): Promise<PessoaPermissao>;
  abstract findAll(): Promise<PessoaPermissaoBody[]>;
  abstract findById(id: number): Promise<PessoaPermissao | null>;
  abstract update(
    id: number,
    data: Partial<PessoaPermissaoBody>,
  ): Promise<PessoaPermissao>;
  abstract delete(id: number): Promise<void>;
}
