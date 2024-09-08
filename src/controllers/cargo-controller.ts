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
import { CargoBody } from '../dtos/criar-cargo';
import { CargoService } from 'src/services/cargo.service';

@Controller('cargo')
export class CargoController {
  constructor(private readonly cargoService: CargoService) {}

  @Get('listar/:id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const cargo = await this.cargoService.findById(id);
    if (!cargo) {
      throw new Error('Cargo não encontrado');
    }
    return cargo;
  }

  @Get('listar')
  async findAll() {
    return await this.cargoService.findAll();
  }

  @Post('cadastrar')
  async create(@Body() body: CargoBody) {
    const cargoCriado = await this.cargoService.create(body);

    return {
      message: 'Cargo cadastrado com sucesso!',
      status_criado: cargoCriado,
    };
  }

  @Put('atualizar/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<CargoBody>,
  ) {
    const cargoAtualizado = await this.cargoService.update(id, body);
    return {
      message: 'Cargo atualizado com sucesso!',
      cargo_atualizado: cargoAtualizado,
    };
  }

  @Delete('deletar/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const cargoDeletado = await this.cargoService.delete(id);
    return {
      message: 'Cargo deletado com sucesso!',
      cargoDeletado,
    };
  }
}
