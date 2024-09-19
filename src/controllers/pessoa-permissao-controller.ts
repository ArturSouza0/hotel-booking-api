import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PessoaPermissaoBody } from 'src/dtos/criar-pessoa-permissao';
import { PessoaPermissaoService } from 'src/services/pessoa-permissao.service';

@Controller('pessoapermissao')
export class PessoaPermissaoController {
  constructor(
    private readonly pessoaPermissaoService: PessoaPermissaoService,
  ) {}

  @Get('listar/:id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const pessoaPermissao = await this.pessoaPermissaoService.findById(id);
    if (!pessoaPermissao) {
      throw new Error('Pessoa Permissão não encotrada!');
    }
    return pessoaPermissao;
  }

  @Get('listar')
  async findAll() {
    return await this.pessoaPermissaoService.findAll();
  }

  @Post('cadastrar')
  async create(@Body() body: PessoaPermissaoBody) {
    const pessoaPermissaoCriado =
      await this.pessoaPermissaoService.create(body);

    return {
      message: 'Pessoa Permissão cadastrada com sucesso!',
      pessoaPermissao_cadastrado: pessoaPermissaoCriado,
    };
  }

  @Put('atualizar/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<PessoaPermissaoBody>,
  ) {
    const pessoaPermissaoAtualizado = await this.pessoaPermissaoService.update(
      id,
      body,
    );
    return {
      message: 'Pessoa Permissão atualizada com sucesso!',
      pessoaPermissao_atualizado: pessoaPermissaoAtualizado,
    };
  }

  @Delete('deletar/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const pessoaPermissaoDeletado =
      await this.pessoaPermissaoService.delete(id);
    return {
      message: 'Pessoa Permissão deletada com sucesso!',
      pessoaPermissaoDeletado,
    };
  }
}
