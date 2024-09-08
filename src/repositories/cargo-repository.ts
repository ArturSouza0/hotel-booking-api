import { CargoBody } from 'src/dtos/criar-cargo';
import { Cargo } from 'src/entities/cargo-entity';

export abstract class CargoRepository {
  abstract create(data: CargoBody): Promise<Cargo>;
  abstract findAll(): Promise<CargoBody[]>;
  abstract findById(id: number): Promise<Cargo | null>;
  abstract update(id: number, data: Partial<CargoBody>): Promise<Cargo>;
  abstract delete(id: number): Promise<void>;
}
