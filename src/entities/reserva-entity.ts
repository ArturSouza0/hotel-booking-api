export class Reserva {
  id?: number;
  pessoa_id: number;
  quarto_id: number;
  data_checkin: Date | string;
  data_checkout: Date | string;
  status_id: number;
  plano_id: number;

  constructor(partial: Partial<Reserva>) {
    Object.assign(this, partial);
  }
}
