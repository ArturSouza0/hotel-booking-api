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
import { PlanoServicoBody } from 'src/dtos/criar-plano-servico';
import { PlanoServicoService } from 'src/services/plano-servico.service';

@Controller('planoservico')
export class PlanoServicoController {
  constructor(private readonly planoServicoService: PlanoServicoService) {}

  @Get('listar/:id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const servico = await this.planoServicoService.findById(id);
    if (!servico) {
      throw new Error('Servico não encotrado');
    }
    return servico;
  }

  @Get('listar')
  async findAll() {
    return await this.planoServicoService.findAll();
  }

  @Post('cadastrar')
  async create(@Body() body: PlanoServicoBody) {
    const servicoCriado = await this.planoServicoService.create(body);

    return {
      message: 'Servico cadastrado com sucesso!',
      servico_cadastrado: servicoCriado,
    };
  }

  @Put('atualizar/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<PlanoServicoBody>,
  ) {
    const servicoAtualizado = await this.planoServicoService.update(id, body);
    return {
      message: 'Servico atualizado com sucesso!',
      servico_atualizado: servicoAtualizado,
    };
  }

  @Delete('deletar/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const servicoDeletado = await this.planoServicoService.delete(id);
    return {
      message: 'Servico deletado com sucesso!',
      servicoDeletado,
    };
  }
}
