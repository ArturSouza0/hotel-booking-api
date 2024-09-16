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
import { ClienteBody } from 'src/dtos/criar-cliente';
import { ClienteService } from 'src/services/cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get('listar/:id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const cliente = await this.clienteService.findById(id);
    if (!cliente) {
      throw new Error('Cliente não encotrado');
    }
    return cliente;
  }

  @Get('listar')
  async findAll() {
    return await this.clienteService.findAll();
  }

  @Post('cadastrar')
  async create(@Body() body: ClienteBody) {
    const clienteCriado = await this.clienteService.create(body);

    return {
      message: 'Cliente cadastrado com sucesso!',
      cliente_cadastrado: clienteCriado,
    };
  }

  @Put('atualizar/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<ClienteBody>,
  ) {
    const clienteAtualizado = await this.clienteService.update(id, body);
    return {
      message: 'Cliente atualizado com sucesso!',
      cliente_atualizado: clienteAtualizado,
    };
  }

  @Delete('deletar/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const clienteDeletado = await this.clienteService.delete(id);
    return {
      message: 'Cliente deletado com sucesso!',
      clienteDeletado,
    };
  }
}
