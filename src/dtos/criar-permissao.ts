import { IsNotEmpty } from 'class-validator';

export class PermissaoBody {
  @IsNotEmpty({
    message: 'A descrição da permissão é obrigatória!',
  })
  descricao: string;
}
