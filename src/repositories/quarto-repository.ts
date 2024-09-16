import { QuartoBody } from 'src/dtos/criar-quarto';
import { Quarto } from 'src/entities/quarto-entity';

export abstract class QuartoRepository {
  abstract create(data: QuartoBody): Promise<Quarto>;
  abstract findById(id: number): Promise<Quarto | null>;
  abstract findAll(): Promise<Quarto[]>;
  abstract update(id: number, data: Partial<QuartoBody>): Promise<Quarto>;
  abstract delete(id: number): Promise<void>;
}
