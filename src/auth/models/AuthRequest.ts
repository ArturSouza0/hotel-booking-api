import { Request } from 'express';
import { Pessoa } from 'src/entities/pessoa-entity';

export interface AuthRequest extends Request {
  pessoa: Pessoa;
}
