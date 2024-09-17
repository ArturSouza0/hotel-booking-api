import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ServicoBody } from 'src/dtos/criar-servico';
import { ServicoService } from './../services/servico.service';


@Controller('servico')
export class ServicoController {
    constructor(private readonly servivoService: ServicoService) { }

    @Get('listar/:id')
    async findById(@Param('id', ParseIntPipe) id: number) {
        const servico = await this.servivoService.findById(id);
        if (!servico) {
            throw new Error('Servico não encotrado');
        }
        return servico;
    }

    @Get('listar')
    async findAll() {
        return await this.servivoService.findAll();
    }

    @Post('cadastrar')
    async create(@Body() body: ServicoBody) {
        const servicoCriado = await this.servivoService.create(body);

        return {
            message: 'Servico cadastrado com sucesso!',
            servico_cadastrado: servicoCriado,
        };
    }

    @Put('atualizar/:id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: Partial<ServicoBody>,
    ) {
        const servicoAtualizado = await this.servivoService.update(id, body);
        return {
            message: 'Servico atualizado com sucesso!',
            servico_atualizado: servicoAtualizado,
        };
    }

    @Delete('deletar/:id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        const servicoDeletado = await this.servivoService.delete(id);
        return {
            message: 'Servico deletado com sucesso!',
            servicoDeletado,
        };
    }
}