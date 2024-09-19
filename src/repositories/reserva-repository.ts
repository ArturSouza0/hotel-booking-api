import { ReservaBody } from 'src/dtos/criar-reserva';
import { Reserva } from 'src/entities/reserva-entity';

export abstract class ReservaRepository {
  abstract create(data: ReservaBody): Promise<Reserva>;
  abstract findById(id: number): Promise<Reserva | null>;
  abstract findAll(): Promise<Reserva[]>;
  abstract update(id: number, data: Partial<ReservaBody>): Promise<Reserva>;
  abstract delete(id: number): Promise<void>;
}
