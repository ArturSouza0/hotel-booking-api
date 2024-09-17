export class TipoPagamento {
    id: number;
    descricao: string;

    constructor(partial: Partial<TipoPagamento>) {
        Object.assign(this, partial)
    }
}