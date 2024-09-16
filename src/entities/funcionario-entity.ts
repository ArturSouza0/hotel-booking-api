export class Funcionario {
  id: number;
  pessoa_id?: number;
  cargo_id?: number;

  constructor(partial: Partial<Funcionario>) {
    Object.assign(this, partial);
  }
}
