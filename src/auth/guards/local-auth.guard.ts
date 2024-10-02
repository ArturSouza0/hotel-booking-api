import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, pessoa, info, context) {
    if (err || !pessoa) {
      throw new UnauthorizedException(err?.message);
    }

    const request = context.switchToHttp().getRequest();
    request.pessoa = pessoa;

    return pessoa;
  }
}
