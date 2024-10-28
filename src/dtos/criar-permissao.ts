import { IsNotEmpty, IsString } from 'class-validator';

export class PermissaoBody {
  @IsNotEmpty({
    message: 'A descrição da permissão é obrigatória!',
  })
  @IsString({
    message: 'A descrição deve ser uma string válida!',
  })
  descricao: string;
}
