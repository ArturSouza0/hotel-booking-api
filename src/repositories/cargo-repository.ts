import { CargoBody } from 'src/dtos/criar-cargo';

export abstract class CargoRepository {
  abstract create(descricao: string): Promise<void>;
  abstract findAll(): Promise<CargoBody[]>;
  abstract findById(id: number): Promise<CargoBody | null>;
  abstract update(id: number, descricao: string): Promise<void>;
  abstract delete(id: number): Promise<void>;
}
