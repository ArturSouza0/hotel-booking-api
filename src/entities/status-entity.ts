export class Status {
  id: number;
  descricao: string;

  constructor(partial: Partial<Status>) {
    Object.assign(this, partial);
  }
}
