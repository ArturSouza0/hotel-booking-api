import { Decimal } from '@prisma/client/runtime/library';

export class PagamentoBody {
  reserva_id: number;
  tipo_pagamento_id: number;
  valor: Decimal;
  data_pagamento: Date;
}