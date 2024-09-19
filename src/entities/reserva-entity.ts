export class Reserva {
  id: number;
  cliente_id?: number;
  quarto_id?: number;
  data_checkin: Date;
  data_checkout: Date;
  status_id?: number;
  servico_id?: number;
  plano_id?: number;

  constructor(partial: Partial<Reserva>) {
    Object.assign(this, partial);
  }
}
