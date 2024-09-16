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
import { QuartoBody } from 'src/dtos/criar-quarto';
import { QuartoService } from 'src/services/quarto.service';

@Controller('quarto')
export class QuartoController {
  constructor(private readonly quartoService: QuartoService) {}

  @Get('listar/:id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const quarto = await this.quartoService.findById(id);
    if (!quarto) {
      throw new Error('Quarto não encotrado');
    }
    return quarto;
  }

  @Get('listar')
  async findAll() {
    return await this.quartoService.findAll();
  }

  @Post('cadastrar')
  async create(@Body() body: QuartoBody) {
    const quartoCriado = await this.quartoService.create(body);

    return {
      message: 'Quarto cadastrado com sucesso!',
      quarto_cadastrado: quartoCriado,
    };
  }

  @Put('atualizar/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<QuartoBody>,
  ) {
    const quartoAtualizado = await this.quartoService.update(id, body);
    return {
      message: 'Quarto atualizado com sucesso!',
      quarto_atualizado: quartoAtualizado,
    };
  }

  @Delete('deletar/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const quartoDeletado = await this.quartoService.delete(id);
    return {
      message: 'Quarto deletado com sucesso!',
      quartoDeletado,
    };
  }
}
