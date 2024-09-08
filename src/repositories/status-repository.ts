import { StatusBody } from 'src/dtos/criar-status';
import { Status } from 'src/entities/status-entity';

export abstract class StatusRepository {
  abstract create(data: StatusBody): Promise<Status>;
  abstract findAll(): Promise<StatusBody[]>;
  abstract findById(id: number): Promise<Status | null>;
  abstract update(id: number, data: Partial<StatusBody>): Promise<Status>;
  abstract delete(id: number): Promise<void>;
}
