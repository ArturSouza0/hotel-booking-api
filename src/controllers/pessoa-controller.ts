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

  @Get('listar/:id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const pessoa = await this.pessoaService.findById(id);
    if (!pessoa) {
      return { message: 'Pessoa não encontrada!' };
    }
    return pessoa;
  }

  @Get('listar/email/:email')
  async findByEmail(@Param('email') email: string) {
    const pessoa = await this.pessoaService.findByEmail(email);
    if (!pessoa) {
      return { message: 'Pessoa não encontrada!' };
    }
    return pessoa;
  }

  @Get('listar')
  async findAll() {
    const pessoas = await this.pessoaService.findAll();
    return pessoas;
  }

  @Post('cadastrar')
  async create(@Body() body: PessoaBody) {
    const pessoaCriada = await this.pessoaService.create(body);
    return {
      message: 'Pessoa cadastrada com sucesso!',
      pessoaCriada,
    };
  }

  @Put('atualizar/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<PessoaBody>,
  ) {
    const pessoaAtualizada = await this.pessoaService.update(id, body);
    return {
      message: 'Pessoa atualizada com sucesso!',
      pessoaAtualizada,
    };
  }

  @Delete('deletar/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const pessoaDeletada = await this.pessoaService.delete(id);
    return {
      message: 'Pessoa deletada com sucesso!',
      pessoaDeletada,
    };
  }
}
