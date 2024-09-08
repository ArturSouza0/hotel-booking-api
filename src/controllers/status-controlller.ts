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
import { StatusBody } from 'src/dtos/criar-status';
import { StatusService } from 'src/services/status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get('listar/:id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const status = await this.statusService.findById(id);
    if (!status) {
      throw new Error('Status não encontrado');
    }
    return status;
  }

  @Get('listar')
  async findAll() {
    return this.statusService.findAll();
  }

  @Post('cadastrar')
  async create(@Body() body: StatusBody) {
    const statusCriado = await this.statusService.create(body);

    return {
      message: 'Status cadastrado com sucesso!',
      status_criado: statusCriado,
    };
  }

  @Put('atualizar/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<StatusBody>,
  ) {
    const statusAtualizado = await this.statusService.update(id, body);
    return {
      message: 'Status atualizado com sucesso!',
      status_atualizado: statusAtualizado,
    };
  }

  @Delete('deletar/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const statusDeletado = await this.statusService.delete(id);
    return {
      message: 'Status deletado com sucesso!',
      statusDeletado,
    };
  }
}
