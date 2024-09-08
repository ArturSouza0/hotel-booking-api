import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { TipoQuartoBody } from 'src/dtos/criar-tipo-quarto';
import { TipoQuartoService } from 'src/services/tipo-quarto.service';

@Controller('tipoquarto')
export class TipoQuartoController {
  constructor(private readonly tipoQuartoService: TipoQuartoService) {}

  @Get('listar/:id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const tipo_quarto = await this.tipoQuartoService.findById(id);
    if (!tipo_quarto) {
      return { message: 'Tipo quarto não encontrado!' };
    }
    return tipo_quarto;
  }

  @Get('listar')
  async findAll() {
    return await this.tipoQuartoService.findAll();
  }

  @Post('cadastrar')
  async create(@Body() body: TipoQuartoBody) {
    const tipoQuartoCriado = await this.tipoQuartoService.create(body);

    return {
      message: 'Tipo quarto cadastrado com sucesso!',
      tipo_quarto: tipoQuartoCriado,
    };
  }

  @Put('atualizar/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<TipoQuartoBody>,
  ) {
    const tipoQuartoAtualizado = await this.tipoQuartoService.update(id, body);
    return {
      message: 'Tipo quarto atualizado com sucesso!',
      tipo_quarto: tipoQuartoAtualizado,
    };
  }

  @Delete('deletar/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const tipoQuartoDeletado = await this.tipoQuartoService.delete(id);
    return {
      message: 'Tipo quarto deletado com sucesso!',
      tipoQuartoDeletado,
    };
  }
}
