import { Body, Controller, Post } from '@nestjs/common';
import { CargoBody } from './dtos/criar-cargo';
import { CargoRepository } from './repositories/cargo-repository';

@Controller('app')
export class AppController {
  constructor(private cargoRepository: CargoRepository) {}

  @Post('cargo')
  async getCargo(@Body() body: CargoBody) {
    const { descricao } = body;
    await this.cargoRepository.create(descricao);
  }
}
