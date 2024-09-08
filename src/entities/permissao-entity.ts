export class Permissao {
  id: number;
  descricao: string;

  constructor(partial: Partial<Permissao>) {
    Object.assign(this, partial);
  }
}
