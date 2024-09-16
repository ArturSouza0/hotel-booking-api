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
import { FuncionarioBody } from 'src/dtos/criar-funcionarios';
import { FuncionarioService } from 'src/services/funcionario.service';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Get('listar/:id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const funcionario = await this.funcionarioService.findById(id);
    if (!funcionario) {
      throw new Error('Funcionario não encotrado');
    }
    return funcionario;
  }

  @Get('listar')
  async findAll() {
    return await this.funcionarioService.findAll();
  }

  @Post('cadastrar')
  async create(@Body() body: FuncionarioBody) {
    const funcionarioCriado = await this.funcionarioService.create(body);

    return {
      message: 'Funcionario cadastrado com sucesso!',
      funcionario_cadastrado: funcionarioCriado,
    };
  }

  @Put('atualizar/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<FuncionarioBody>,
  ) {
    const funcionarioAtualizado = await this.funcionarioService.update(
      id,
      body,
    );
    return {
      message: 'Funcionario atualizado com sucesso!',
      funcionario_atualizado: funcionarioAtualizado,
    };
  }

  @Delete('deletar/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const funcionarioDeletado = await this.funcionarioService.delete(id);
    return {
      message: 'Funcionario deletado com sucesso!',
      funcionarioDeletado,
    };
  }
}
