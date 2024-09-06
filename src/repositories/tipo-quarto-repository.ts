import { TipoQuartoBody } from 'src/dtos/criar-tipo-quarto';

export abstract class TipoQuartoRepository {
  abstract create(descricao: string, preco_diaria: number): Promise<void>;
  abstract findAll(): Promise<TipoQuartoBody[]>;
  abstract findById(id: number): Promise<TipoQuartoBody | null>;
  abstract update(
    id: number,
    descricao: string,
    preco_diaria: number,
  ): Promise<void>;
  abstract delete(id: number): Promise<void>;
}
