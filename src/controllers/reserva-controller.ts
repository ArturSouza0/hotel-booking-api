import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ReservaBody } from 'src/dtos/criar-reserva';
import { ReservaService } from 'src/services/reserva.service';

@Controller('reserva')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  @Get('listar/:id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const reserva = await this.reservaService.findById(id);
    if (!reserva) {
      throw new Error('Reserva não encotrada');
    }
    return reserva;
  }

  @Get('listar')
  async findAll() {
    return await this.reservaService.findAll();
  }

  @Post('cadastrar')
  async create(@Body() body: ReservaBody) {
    const ReservaCriado = await this.reservaService.create(body);

    return {
      message: 'Reserva cadastrada com sucesso!',
      Reserva_cadastrado: ReservaCriado,
    };
  }

  @Put('atualizar/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<ReservaBody>,
  ) {
    const reservaAtualizada = await this.reservaService.update(id, body);
    return {
      message: 'Reserva atualizada com sucesso!',
      reserva_atualizada: reservaAtualizada,
    };
  }

  @Delete('deletar/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const ReservaDeletado = await this.reservaService.delete(id);
    return {
      message: 'Reserva deletada com sucesso!',
      ReservaDeletado,
    };
  }
}
