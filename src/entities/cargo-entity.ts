export class Cargo {
  id: number;
  descricao: string;

  constructor(partial: Partial<Cargo>) {
    Object.assign(this, partial);
  }
}
