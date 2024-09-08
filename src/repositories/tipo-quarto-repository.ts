import { TipoQuartoBody } from 'src/dtos/criar-tipo-quarto';
import { TipoQuarto } from 'src/entities/tipo-quarto-entity';

export abstract class TipoQuartoRepository {
  abstract create(data: TipoQuartoBody): Promise<TipoQuarto>;
  abstract findAll(): Promise<TipoQuarto[]>;
  abstract findById(id: number): Promise<TipoQuarto | null>;
  abstract update(
    id: number,
    data: Partial<TipoQuartoBody>,
  ): Promise<TipoQuarto>;
  abstract delete(id: number): Promise<void>;
}
