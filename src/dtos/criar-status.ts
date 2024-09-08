import { IsNotEmpty } from 'class-validator';

export class StatusBody {
  id: number;
  @IsNotEmpty({
    message: 'A descrição do status é obrigatória!',
  })
  descricao: string;
}
