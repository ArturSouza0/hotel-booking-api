import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CargoBody } from './dtos/criar-cargo';
import { CargoRepository } from './repositories/cargo-repository';

@Controller('app')
export class AppController {

  constructor(private cargoRepository: CargoRepository) { }
 
  @Get('cargos')
  async getAllCargos() {
    return this.cargoRepository.findAll();
  }
  
  @Get('cargo/:id')
  async getCargoById(@Param('id', ParseIntPipe) id: number) {
    const cargo = await this.cargoRepository.findById(id);
    if (!cargo) {
      throw new Error('Cargo não encontrado');
    }
    return cargo;
  }
  
  @Post('cargo')
  async postCargo(@Body() body: CargoBody) {
    const { descricao } = body;
    await this.cargoRepository.create(descricao);
    return {message:'Cargo cadastrado com sucesso!' }
  }

  @Put('cargo/:id')
  async updateCargo(@Param('id', ParseIntPipe) id: number, @Body() body: CargoBody) {
    const { descricao } = body;
    await this.cargoRepository.update(id, descricao);
    return { message: 'Cargo atualizado com sucesso!' };
  }

  @Delete('cargo/:id')
  async deleteCargo(@Param('id', ParseIntPipe) id: number) {
    await this.cargoRepository.delete(id);
    return { message: 'Cargo deletado com sucesso!' };
  }
}
