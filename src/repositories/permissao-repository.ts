import { PermissaoBody } from 'src/dtos/criar-permissao';
import { Permissao } from 'src/entities/permissao-entity';

export abstract class PermissaoRepository {
  abstract create(data: PermissaoBody): Promise<Permissao>;
  abstract findAll(): Promise<PermissaoBody[]>;
  abstract findById(id: number): Promise<Permissao | null>;
  abstract update(id: number, data: Partial<PermissaoBody>): Promise<Permissao>;
  abstract delete(id: number): Promise<void>;
}
