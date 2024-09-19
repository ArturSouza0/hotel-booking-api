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
import { PlanoBody } from 'src/dtos/criar-plano';
import { PlanoService } from 'src/services/plano.service';

@Controller('plano')
export class PlanoController {
  constructor(private readonly planoService: PlanoService) {}

  @Get('listar/:id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const plano = await this.planoService.findById(id);
    if (!plano) {
      return { message: 'Plano não encontrado!' };
    }
    return plano;
  }

  @Get('listar')
  async findAll() {
    const planos = await this.planoService.findAll();
    return planos;
  }

  @Post('cadastrar')
  async create(@Body() body: PlanoBody) {
    const planoCriado = await this.planoService.create(body);
    return {
      message: 'Plano cadastrado com sucesso!',
      planoCriado,
    };
  }

  @Put('atualizar/:id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() body: PlanoBody) {
    const planoAtualizado = await this.planoService.update(id, body);
    return {
      message: 'Plano atualizado com sucesso!',
      planoAtualizado,
    };
  }

  @Delete('deletar/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const planoDeletado = await this.planoService.delete(id);
    return {
      message: 'Plano deletado com sucesso!',
      planoDeletado,
    };
  }
}
