import {
  Controller,
  Post,
  Put,
  Get,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { PessoaService } from '../services/pessoa.service';
import { PessoaBody } from 'src/dtos/criar-pessoa';

@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post('cadastrar')
  async createPessoa(@Body() body: PessoaBody) {
    const pessoaCriada = await this.pessoaService.createPessoa(body);
    return {
      message: 'Pessoa cadastrada com sucesso!',
      pessoa: pessoaCriada,
    };
  }

  @Put('atualizar/:id')
  async updatePessoa(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PessoaBody,
  ) {
    const pessoaAtualizada = await this.pessoaService.updatePessoa(id, body);
    return {
      message: 'Pessoa atualizada com sucesso!',
      pessoa: pessoaAtualizada,
    };
  }

  @Get('buscar/:id')
  async getPessoa(@Param('id', ParseIntPipe) id: number) {
    const pessoa = await this.pessoaService.getPessoaById(id);
    if (!pessoa) {
      return { message: 'Pessoa não encontrada!' };
    }
    return pessoa;
  }

  @Get('listar')
  async getPessoas() {
    const pessoas = await this.pessoaService.getAllPessoas();
    return pessoas;
  }

  @Delete('deletar/:id')
  async deletePessoa(@Param('id', ParseIntPipe) id: number) {
    return this.pessoaService.deletePessoa(id);
  }
}
