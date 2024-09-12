export class Cliente {
    id: number;
    pessoa_id: number;
    numero_fidelidade?: string;
    observacoes?: string;

    constructor(partial: Partial<Cliente>) {
        Object.assign(this, partial);
    }
}