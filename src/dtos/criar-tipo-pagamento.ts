import { IsNotEmpty, IsString } from 'class-validator';

export class TipoPagamentoBody {
  id?: number;

  @IsNotEmpty({
    message: 'A descrição do tipo de pagamento é obrigatória!',
  })
  @IsString({
    message: 'A descrição do tipo de pagamento deve ser uma string!',
  })
  descricao: string;
}
