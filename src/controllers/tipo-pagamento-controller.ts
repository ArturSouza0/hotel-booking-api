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
import { TipoPagamentoBody } from 'src/dtos/criar-tipo-pagamento';
import { TipoPagamentoService } from 'src/services/tipo-pagamento.service';

@Controller('tipopagamento')
export class TipoPagamentoController {
  constructor(private readonly tipoPagamentoService: TipoPagamentoService) {}

  @Get('listar/:id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const tipoPagamento = await this.tipoPagamentoService.findById(id);
    if (!tipoPagamento) {
      throw new Error('Tipo pagamento não encontrado');
    }
    return tipoPagamento;
  }

  @Get('listar')
  async findAll() {
    return this.tipoPagamentoService.findAll();
  }

  @Post('cadastrar')
  async create(@Body() body: TipoPagamentoBody) {
    const tipoPagamentoCriado = await this.tipoPagamentoService.create(body);

    return {
      message: 'Tipo pagamento cadastrado com sucesso!',
      tipoPagamento_criado: tipoPagamentoCriado,
    };
  }

  @Put('atualizar/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<TipoPagamentoBody>,
  ) {
    const tipoPagamentoAtualizado = await this.tipoPagamentoService.update(
      id,
      body,
    );
    return {
      message: 'Tipo pagamento atualizado com sucesso!',
      tipoPagamento_atualizado: tipoPagamentoAtualizado,
    };
  }

  @Delete('deletar/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const tipoPagamentoDeletado = await this.tipoPagamentoService.delete(id);
    return {
      message: 'Tipo pagamento deletado com sucesso!',
      tipoPagamentoDeletado,
    };
  }
}
