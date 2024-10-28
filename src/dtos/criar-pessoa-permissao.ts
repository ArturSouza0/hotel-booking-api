import { IsInt, IsNotEmpty } from 'class-validator';

export class PessoaPermissaoBody {
  id?: number;

  @IsNotEmpty({
    message: 'O ID da pessoa é obrigatório!',
  })
  @IsInt({
    message: 'O ID da pessoa deve ser um número inteiro!',
  })
  pessoa_id: number;

  @IsNotEmpty({
    message: 'O ID da permissão é obrigatório!',
  })
  @IsInt({
    message: 'O ID da permissão deve ser um número inteiro!',
  })
  permissao_id: number;
}
