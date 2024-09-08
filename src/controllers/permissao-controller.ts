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
import { PermissaoRepository } from 'src/repositories/permissao-repository';

@Controller('permissao')
export class PermissaoController {
  constructor(private permissaoRepository: PermissaoRepository) {}

  @Get('listar')
  async getAllPermissoes() {
    return this.permissaoRepository.findAll();
  }

  @Get('listar/:id')
  async getPermissapById(@Param('id', ParseIntPipe) id: number) {
    const permissao = await this.permissaoRepository.findById(id);
    if (!permissao) {
      throw new Error('Permissão não encontrada');
    }
    return permissao;
  }

  @Post('cadastrar')
  async postPermissao(@Body() body: PermissaoBody) {
    const { descricao } = body;
    await this.permissaoRepository.create(descricao);
    return { message: 'Permissão cadastrada com sucesso!' };
  }

  @Put('atualizar/:id')
  async putPermissao(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PermissaoBody,
  ) {
    const { descricao } = body;
    await this.permissaoRepository.update(id, descricao);
    return { message: 'Permissão atualizada com sucesso!' };
  }

  @Delete('deletar/:id')
  async deletePermissao(@Param('id', ParseIntPipe) id: number) {
    await this.permissaoRepository.delete(id);
    return { message: 'Permissão deletada com sucesso!' };
  }
}
