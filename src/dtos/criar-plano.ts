import { IsNotEmpty, IsString, IsNumber, IsPositive } from 'class-validator';
import { Decimal } from '@prisma/client/runtime/library';

export class PlanoBody {
  @IsNotEmpty({
    message: 'A descrição do plano é obrigatória!',
  })
  @IsString({
    message: 'A descrição deve ser uma string válida!',
  })
  descricao: string;

  @IsNotEmpty({
    message: 'O preço é obrigatório!',
  })
  @IsNumber(
    {},
    {
      message: 'O preço deve ser um número válido!',
    },
  )
  @IsPositive({
    message: 'O preço deve ser um número positivo!',
  })
  preco: Decimal;
}
