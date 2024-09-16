import { ClienteBody } from 'src/dtos/criar-cliente';
import { Cliente } from 'src/entities/cliente-entity';

export abstract class ClienteRepository {
  abstract create(data: ClienteBody): Promise<Cliente>;
  abstract findById(id: number): Promise<Cliente | null>;
  abstract findAll(): Promise<Cliente[]>;
  abstract update(id: number, data: Partial<ClienteBody>): Promise<Cliente>;
  abstract delete(id: number): Promise<void>;
}
