export class Quarto {
  id?: number;
  numero: string;
  tipo_quarto_id: number;
  id_status: number;

  constructor(partial: Partial<Quarto>) {
    Object.assign(this, partial);
  }
}
