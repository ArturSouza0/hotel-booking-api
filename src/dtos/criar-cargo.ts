import { IsNotEmpty } from 'class-validator';

export class CargoBody {
  @IsNotEmpty({
    message: 'O id do cargo é obrigatório!',
  })
  id: number;
  @IsNotEmpty({
    message: 'A descrição do cargo é obrigatória!',
  })
  descricao: string;
}
