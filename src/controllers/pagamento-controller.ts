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
import { PagamentoBody } from 'src/dtos/criar-pagamento';
import { PagamentoService } from 'src/services/pagamento.service';

@Controller('pagamento')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  @Get('listar/:id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const pagamento = await this.pagamentoService.findById(id);
    if (!pagamento) {
      throw new Error('Pagamento não encontrado');
    }
    return pagamento;
  }

  @Get('listar')
  async findAll() {
    return this.pagamentoService.findAll();
  }

  @Post('cadastrar')
  async create(@Body() body: PagamentoBody) {
    const pagamentoCriado = await this.pagamentoService.create(body);

    return {
      message: 'Pagamento cadastrado com sucesso!',
      pagamento_criado: pagamentoCriado,
    };
  }

  @Put('atualizar/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<PagamentoBody>,
  ) {
    const pagamentoAtualizado = await this.pagamentoService.update(id, body);
    return {
      message: 'Pagamento atualizado com sucesso!',
      pagamento_atualizado: pagamentoAtualizado,
    };
  }

  @Delete('deletar/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const pagamentoDeletado = await this.pagamentoService.delete(id);
    return {
      message: 'Pagamento deletado com sucesso!',
      pagamentoDeletado,
    };
  }
}
