import { Decimal } from '@prisma/client/runtime/library';

export class Plano {
  id: number;
  descricao: string;
  preco: Decimal;

  constructor(partial: Partial<Plano>) {
    Object.assign(this, partial);
  }
}
