import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthRequest } from '../models/AuthRequest';
import { Pessoa } from 'src/entities/pessoa-entity';

export const CurrentPessoa = createParamDecorator(
  (data: unknown, context: ExecutionContext): Pessoa => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.pessoa;
  },
);
