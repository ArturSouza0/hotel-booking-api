import { IsNotEmpty } from 'class-validator';

export class TipoQuartoBody {
  id: number;

  @IsNotEmpty({
    message: 'A descrição do tipo do quarto é obrigatória!',
  })
  descricao: string;

  @IsNotEmpty({
    message: 'O preço da diária é obrigatório!',
  })
  preco_diaria: number;
}
