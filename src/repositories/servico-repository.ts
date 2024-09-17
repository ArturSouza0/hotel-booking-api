import { ServicoBody } from "src/dtos/criar-servico";
import { Servico } from "src/entities/servico-entity";

export abstract class ServicoRepository {
    abstract create(data: ServicoBody): Promise<Servico>;
    abstract findById(id: number): Promise<Servico | null>;
    abstract findAll(): Promise<Servico[]>;
    abstract update(
      id: number,
      data: Partial<ServicoBody>,
    ): Promise<Servico>;
    abstract delete(id: number): Promise<void>;
  }
  