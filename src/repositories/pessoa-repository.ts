import { PessoaBody } from 'src/dtos/criar-pessoa';
import { Pessoa } from 'src/entities/pessoa-entity';

export abstract class PessoaRepository {
  abstract create(data: PessoaBody): Promise<Pessoa>;
  abstract findById(id: number): Promise<Pessoa | null>;
  abstract findAll(): Promise<Pessoa[]>;
  abstract update(id: number, data: Partial<PessoaBody>): Promise<Pessoa>;
  abstract delete(id: number): Promise<void>;
}
