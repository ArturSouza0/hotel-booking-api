import { IsNotEmpty } from 'class-validator';

export class PermissaoBody {
  id: number;
  @IsNotEmpty({
    message: 'A descrição da permissão é obrigatória!',
  })
  descricao: string;
}
