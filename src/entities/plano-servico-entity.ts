export class PlanoServico {
  id: number;
  plano_id?: number;
  servico_id?: number;

  constructor(partial: Partial<PlanoServico>) {
    Object.assign(this, partial);
  }
}
