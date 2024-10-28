import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class TipoQuartoBody {
  id?: number;

  @IsNotEmpty({
    message: 'A descrição do tipo do quarto é obrigatória!',
  })
  @IsString({
    message: 'A descrição deve ser uma string válida!',
  })
  descricao: string;

  @IsNotEmpty({
    message: 'O preço da diária é obrigatório!',
  })
  @IsNumber(
    {},
    {
      message: 'O preço da diária deve ser um número válido!',
    },
  )
  preco_diaria: number;
}
