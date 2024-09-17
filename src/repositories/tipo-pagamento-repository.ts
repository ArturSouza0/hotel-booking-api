import { TipoPagamentoBody } from "src/dtos/criar-tipo-pagamento";
import { TipoPagamento } from "src/entities/tipo-pagamento-entity";

export abstract class TipoPagamentoRepository {
    abstract create(data: TipoPagamentoBody): Promise<TipoPagamento>;
    abstract findById(id: number): Promise<TipoPagamento | null>;
    abstract findAll(): Promise<TipoPagamento[]>;
    abstract update(
        id: number,
        data: Partial<TipoPagamentoBody>,
    ): Promise<TipoPagamento>;
    abstract delete(id: number): Promise<void>;
}
