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
import { PermissaoBody } from 'src/dtos/criar-permissao';
import { PermissaoService } from 'src/services/permissao.service';

@Controller('permissao')
export class PermissaoController {
  constructor(private permissaoService: PermissaoService) {}

  @Get('listar/:id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const permissao = await this.permissaoService.findById(id);
    if (!permissao) {
      throw new Error('Permissão não encontrada');
    }
    return permissao;
  }

  @Get('listar')
  async findAll() {
    return await this.permissaoService.findAll();
  }

  @Post('cadastrar')
  async create(@Body() body: PermissaoBody) {
    const permissaoCriada = await this.permissaoService.create(body);

    return {
      message: 'Permissão cadastrada com sucesso!',
      permissao_criado: permissaoCriada,
    };
  }

  @Put('atualizar/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<PermissaoBody>,
  ) {
    const permissaoAtualizado = await this.permissaoService.update(id, body);
    return {
      message: 'Permissão atualizada com sucesso!',
      permissao_atualizado: permissaoAtualizado,
    };
  }

  @Delete('deletar/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const permissaoDeletada = await this.permissaoService.delete(id);
    return {
      message: 'Permissão deletada com sucesso!',
      permissaoDeletada,
    };
  }
}
