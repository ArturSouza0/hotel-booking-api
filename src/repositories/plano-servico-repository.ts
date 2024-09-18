import { PlanoServicoBody } from 'src/dtos/criar-plano-servico';
import { PlanoServico } from 'src/entities/plano-servico-entity';

export abstract class PlanoServicoRepository {
  abstract create(data: PlanoServicoBody): Promise<PlanoServico>;
  abstract findAll(): Promise<PlanoServico[]>;
  abstract findById(id: number): Promise<PlanoServico | null>;
  abstract update(
    id: number,
    data: Partial<PlanoServicoBody>,
  ): Promise<PlanoServico>;
  abstract delete(id: number): Promise<void>;
}
