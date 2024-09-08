import { Decimal } from '@prisma/client/runtime/library';

export class TipoQuarto {
  id: number;
  descricao: string;
  preco_diaria: Decimal;

  constructor(partial: Partial<TipoQuarto>) {
    Object.assign(this, partial);
  }
}
