import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class PessoaBody {
  id?: number;

  @IsNotEmpty({
    message: 'O nome do usuário é obrigatório!',
  })
  @IsString()
  @Length(2, 50, {
    message: 'O nome deve ter entre 2 e 50 caracteres',
  })
  nome: string;

  @IsNotEmpty({
    message: 'O sobrenome do usuário é obrigatório!',
  })
  @IsString()
  @Length(2, 50, {
    message: 'O sobrenome deve ter entre 2 e 50 caracteres',
  })
  sobrenome: string;

  @IsNotEmpty({
    message: 'O email do usuário é obrigatório!',
  })
  @IsEmail({}, { message: 'O email deve ser válido' })
  email: string;

  @IsNotEmpty({
    message: 'A senha do usuário é obrigatória!',
  })
  @Length(8, 20, {
    message: 'A senha deve ter entre 8 e 20 caracteres',
  })
  senha: string;

  @IsNotEmpty({
    message: 'O CPF do usuário é obrigatório!',
  })
  @Matches(/^[0-9]{11}$/, {
    message: 'O CPF deve ter 11 dígitos numéricos',
  })
  cpf: string;

  @IsOptional()
  @IsString()
  identidade?: string;

  @IsOptional()
  @IsString()
  @Length(1, 20, {
    message: 'O telefone deve ter entre 1 e 20 caracteres',
  })
  telefone?: string;

  @IsNotEmpty({
    message: 'O número de contato é obrigatório!',
  })
  @Matches(/^\+?[1-9]\d{1,14}$/, {
    message: 'O número de contato deve estar em um formato válido',
  })
  numero_contato: string;

  @IsOptional()
  @IsString()
  endereco?: string;

  @IsOptional()
  @IsString()
  cidade?: string;

  @IsOptional()
  @IsString()
  pais?: string;

  @IsOptional()
  @IsString()
  comprovante_residencia?: string;

  @IsOptional()
  @IsDate({ message: 'A data de nascimento deve ser uma data válida' })
  data_nascimento?: Date;

  @IsOptional()
  @IsString()
  @Length(1, 50, {
    message: 'O gênero deve ter entre 1 e 50 caracteres',
  })
  genero?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100, {
    message: 'A nacionalidade deve ter entre 1 e 100 caracteres',
  })
  nacionalidade?: string;

  @IsOptional()
  @IsBoolean({ message: 'O campo ativo deve ser um valor booleano' })
  ativo?: boolean;

  @IsOptional()
  @IsDate({ message: 'A data de criação deve ser uma data válida' })
  data_criacao?: Date;

  @IsOptional()
  @IsDate({ message: 'A data de atualização deve ser uma data válida' })
  data_atualizacao?: Date;
}
