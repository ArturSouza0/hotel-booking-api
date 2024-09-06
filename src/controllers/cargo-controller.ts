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
import { CargoRepository } from '../repositories/cargo-repository';

@Controller('cargo')
export class CargoController {
  constructor(private cargoRepository: CargoRepository) {}

  @Get('listar')
  async getAllCargos() {
    return this.cargoRepository.findAll();
  }

  @Get('listar/:id')
  async getCargoById(@Param('id', ParseIntPipe) id: number) {
    const cargo = await this.cargoRepository.findById(id);
    if (!cargo) {
      throw new Error('Cargo não encontrado');
    }
    return cargo;
  }

  @Post('cadastrar')
  async postCargo(@Body() body: CargoBody) {
    const { descricao } = body;
    await this.cargoRepository.create(descricao);
    return { message: 'Cargo cadastrado com sucesso!' };
  }

  @Put('atualizar/:id')
  async updateCargo(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CargoBody,
  ) {
    const { descricao } = body;
    await this.cargoRepository.update(id, descricao);
    return { message: 'Cargo atualizado com sucesso!' };
  }

  @Delete('deletar/:id')
  async deleteCargo(@Param('id', ParseIntPipe) id: number) {
    await this.cargoRepository.delete(id);
    return { message: 'Cargo deletado com sucesso!' };
  }
}
