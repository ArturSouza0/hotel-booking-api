import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Pessoa } from 'src/entities/pessoa-entity';
import { PessoaToken } from './models/PessoaToken';
import { PessoaPayload } from './models/PessoaPayload';
import { PessoaService } from '../Pessoa/pessoa.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly pessoaService: PessoaService,
  ) {}

  async login(pessoa: Pessoa): Promise<PessoaToken> {
    const payload: PessoaPayload = {
      sub: pessoa.id,
      email: pessoa.email,
      name: pessoa.nome,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validarPessoa(email: string, senha: string): Promise<Pessoa> {
    const pessoa = await this.pessoaService.findByEmail(email);

    if (pessoa) {
      const senhaValida = await bcrypt.compare(senha, pessoa.senha);
      if (senhaValida) {
        return pessoa;
      }
    }
    throw new UnauthorizedException('Email ou senha incorretos.');
  }
}
