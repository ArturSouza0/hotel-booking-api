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
import { TipoQuartoBody } from 'src/dtos/criar-tipo-quarto';
import { TipoQuartoRepository } from 'src/repositories/tipo-quarto-repository';

@Controller('tipoquarto')
export class TipoQuartoController {
  constructor(private tipoQuartoRepository: TipoQuartoRepository) {}

  @Get('listar')
  async getAllTipoQuartos() {
    return this.tipoQuartoRepository.findAll();
  }

  @Get('listar/:id')
  async getTipoQuartoById(@Param('id', ParseIntPipe) id: number) {
    const tipoquarto = await this.tipoQuartoRepository.findById(id);
    if (!tipoquarto) {
      throw new Error('Tipo quarto não encontrado');
    }
    return tipoquarto;
  }

  @Post('cadastrar')
  async postTipoQuarto(@Body() body: TipoQuartoBody) {
    const { descricao, preco_diaria } = body;
    await this.tipoQuartoRepository.create(descricao, preco_diaria);
    return { message: 'Tipo quarto cadastrado com sucesso!' };
  }

  @Put('atualizar/:id')
  async updateTipoQuarto(
    @Param('id', ParseIntPipe) id: number,
    @Body() Body: TipoQuartoBody,
  ) {
    const { descricao, preco_diaria } = Body;
    await this.tipoQuartoRepository.update(id, descricao, preco_diaria);
    return { message: 'Tipo quarto atualizado com sucesso!' };
  }

  @Delete('deletar/:id')
  async deleteTipoQuarto(@Param('id', ParseIntPipe) id: number) {
    await this.tipoQuartoRepository.delete(id);
    return { message: 'Tipo quarto deletado com sucesso!' };
  }
}
