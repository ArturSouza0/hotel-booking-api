import { Decimal } from '@prisma/client/runtime/library';

export class Pagamento {
  id: number;
  reserva_id: number;
  tipo_pagamento_id: number;
  valor: Decimal;
  data_pagamento: Date;

  constructor(partial: Partial<Pagamento>) {
    Object.assign(this, partial);
  }
}
