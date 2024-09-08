import { PermissaoBody } from 'src/dtos/criar-permissao';

export abstract class PermissaoRepository {
  abstract create(descricao: string): Promise<void>;
  abstract findAll(): Promise<PermissaoBody[]>;
  abstract findById(id: number): Promise<PermissaoBody | null>;
  abstract update(id: number, descricao: string): Promise<void>;
  abstract delete(id: number): Promise<void>;
}
