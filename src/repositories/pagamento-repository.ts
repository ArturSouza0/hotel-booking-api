import { PagamentoBody } from 'src/dtos/criar-pagamento';
import { Pagamento } from 'src/entities/pagamento-entity';

export abstract class PagamentoRepository {
  abstract create(data: PagamentoBody): Promise<Pagamento>;
  abstract findById(id: number): Promise<Pagamento | null>;
  abstract findAll(): Promise<Pagamento[]>;
  abstract update(id: number, data: Partial<PagamentoBody>): Promise<Pagamento>;
  abstract delete(id: number): Promise<void>;
}
