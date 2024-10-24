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

@Controller('pessoaPermissao')
export class PessoaPermissaoController {
  constructor(
    private readonly pessoaPermissaoService: PessoaPermissaoService,
  ) {}

  @Get('listar/:id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const pessoaPermissao = await this.pessoaPermissaoService.findById(id);
    if (!pessoaPermissao) {
      throw new Error('Pessoa Permissão não encontrada');
    }
    return pessoaPermissao;
  }

  @Get('listar')
  async findAll() {
    return this.pessoaPermissaoService.findAll();
  }

  @Post('cadastrar')
  async create(@Body() body: PessoaPermissaoBody) {
    const pessoaPermissaoCriada =
      await this.pessoaPermissaoService.create(body);

    return {
      message: 'Pessoa permissão criada com sucesso!',
      pessoaPermissao_Criada: pessoaPermissaoCriada,
    };
  }

  @Put('atualizar/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<PessoaPermissaoBody>,
  ) {
    const pessoaPermissaoAtualizada = await this.pessoaPermissaoService.update(
      id,
      body,
    );
    return {
      message: 'Pessoa permissão atualizado com sucesso!',
      pessoaPermissao_atualizada: pessoaPermissaoAtualizada,
    };
  }

  @Delete('deletar/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const pessoapermissaoDeletada =
      await this.pessoaPermissaoService.delete(id);
    return {
      message: 'Pessoa permissão deletada com sucesso!',
      pessoapermissaoDeletada,
    };
  }
}
