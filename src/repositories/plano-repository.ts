import { PlanoBody } from "src/dtos/criar-plano";
import { Plano } from "src/entities/plano-entity";

export abstract class PlanoRepository {
    abstract create(data: PlanoBody): Promise<Plano>;
    abstract findById(id: number): Promise<Plano | null>;
    abstract findAll(): Promise<Plano[]>;
    abstract update(id: number, data: Partial<PlanoBody>): Promise<Plano>;
    abstract delete(id: number): Promise<void>;
}