import { IsNotEmpty } from 'class-validator';

export class CargoBody {
  id: number;
  @IsNotEmpty({
    message: 'A descrição do cargo é obrigatória!',
  })
  descricao: string;
}
