import { IsNotEmpty } from 'class-validator';

export class CargoBody {
  @IsNotEmpty({
    message: 'A descrição do cargo é obrigatória!',
  })
  descricao: string;
}
