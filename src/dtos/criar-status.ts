import { IsNotEmpty, IsString } from 'class-validator';

export class StatusBody {
  id: number;
  @IsString({
    message: 'A descrição do status deve ser uma string!',
  })
  @IsNotEmpty({
    message: 'A descrição do status é obrigatória!',
  })
  descricao: string;
}
