import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class QuartoBody {
  id?: number;

  @IsNotEmpty({
    message: 'O número do quarto é obrigatório!',
  })
  @IsString({
    message: 'O número do quarto deve ser uma string!',
  })
  numero: string;

  @IsNotEmpty({
    message: 'O ID do tipo de quarto é obrigatório!',
  })
  @IsInt({
    message: 'O ID do tipo de quarto deve ser um número inteiro!',
  })
  tipo_quarto_id: number;

  @IsNotEmpty({
    message: 'O ID do status é obrigatório!',
  })
  @IsInt({
    message: 'O ID do status deve ser um número inteiro!',
  })
  id_status: number;
}
