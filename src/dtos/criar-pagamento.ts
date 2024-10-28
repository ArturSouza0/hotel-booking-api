import {
  IsNotEmpty,
  IsInt,
  IsPositive,
  IsDate,
  IsNumber,
} from 'class-validator';
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

  @IsNotEmpty({
    message: 'O valor do pagamento é obrigatório!',
  })
  @IsPositive({
    message: 'O valor do pagamento deve ser um número positivo!',
  })
  @IsNumber({}, { message: 'O valor do pagamento deve ser um número!' })
  valor: Decimal;

  @IsNotEmpty({
    message: 'A data do pagamento é obrigatória!',
  })
  @IsDate({
    message: 'A data do pagamento deve ser uma data válida!',
  })
  data_pagamento: Date;
}
