import { FuncionarioBody } from 'src/dtos/criar-funcionarios';
import { Funcionario } from 'src/entities/funcionario-entity';

export abstract class FuncionarioRepository {
  abstract create(data: FuncionarioBody): Promise<Funcionario>;
  abstract findById(id: number): Promise<Funcionario | null>;
  abstract findAll(): Promise<Funcionario[]>;
  abstract update(
    id: number,
    data: Partial<FuncionarioBody>,
  ): Promise<Funcionario>;
  abstract delete(id: number): Promise<void>;
}
