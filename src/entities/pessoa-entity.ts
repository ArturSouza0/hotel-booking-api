export class Pessoa {
  id?: number;
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  cpf: string;
  numero_contato: string;
  endereco?: string;
  cidade?: string;
  pais?: string;
  comprovante_residencia?: string;
  data_nascimento?: Date;
  genero?: string;
  nacionalidade?: string;
  ativo: boolean;
  data_criacao?: Date;
  data_atualizacao?: Date;

  constructor(partial: Partial<Pessoa>) {
    Object.assign(this, partial);
  }
}
