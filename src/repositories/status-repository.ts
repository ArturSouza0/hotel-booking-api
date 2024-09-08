import { StatusBody } from 'src/dtos/criar-status';

export abstract class StatusRepository {
  abstract create(descricao: string): Promise<void>;
  abstract findAll(): Promise<StatusBody[]>;
  abstract findById(id: number): Promise<StatusBody | null>;
  abstract update(id: number, descricao: string): Promise<void>;
  abstract delete(id: number): Promise<void>;
}
