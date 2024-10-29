import { IsNotEmpty, IsInt } from 'class-validator';
import { Decimal } from '@prisma/client/runtime/library';

export class PagamentoBody {
  @IsNotEmpty({
    message: 'O ID da pessoa é obrigatório!',
  })
  @IsInt({
    message: 'O ID da pessoa deve ser um número inteiro!',
  })
  pessoa_id: number;

  @IsNotEmpty({
    message: 'O ID da reserva é obrigatório!',
  })
  @IsInt({
    message: 'O ID da reserva deve ser um número inteiro!',
  })
  reserva_id: number;

  @IsNotEmpty({
    message: 'O ID do tipo de pagamento é obrigatório!',
  })
  @IsInt({
    message: 'O ID do tipo de pagamento deve ser um número inteiro!',
  })
  tipo_pagamento_id: number;

  valor?: Decimal;

  data_pagamento?: Date;
}
