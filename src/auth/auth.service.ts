import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Pessoa } from 'src/entities/pessoa-entity';
import { PessoaToken } from './models/PessoaToken';
import { PessoaPayload } from './models/PessoaPayload';
import { PessoaService } from '../Pessoa/pessoa.service';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly pessoaService: PessoaService,
  ) {}

  async login(pessoa: Pessoa, res: Response): Promise<PessoaToken> {
    const payload: PessoaPayload = {
      sub: pessoa.id,
      email: pessoa.email,
      name: pessoa.nome,
    };

    const access_token = this.jwtService.sign(payload, { expiresIn: '30s' });
    const refresh_token = this.jwtService.sign(payload, { expiresIn: '7d' });

    res.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return {
      access_token,
      refresh_token,
    };
  }

  async refreshToken(refreshToken: string): Promise<PessoaToken> {
    try {
      const payload = this.jwtService.verify(refreshToken);
      const pessoa = await this.pessoaService.findById(payload.sub);
      if (!pessoa) throw new UnauthorizedException('Usuário não encontrado');

      const newPayload: PessoaPayload = {
        sub: pessoa.id,
        email: pessoa.email,
        name: pessoa.nome,
      };

      const access_token = this.jwtService.sign(newPayload, {
        expiresIn: '30s',
      });
      return { access_token };
    } catch {
      throw new UnauthorizedException('Token inválido');
    }
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
