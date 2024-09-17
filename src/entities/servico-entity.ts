import { Decimal } from "@prisma/client/runtime/library";

export class Servico {
    id: number;
    descricao: string;
    preco: Decimal;

    constructor(partial: Partial<Servico>) {
        Object.assign(this, partial);
    }
}