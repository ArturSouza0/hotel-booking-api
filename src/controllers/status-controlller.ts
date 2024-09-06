import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { StatusBody } from "src/dtos/criar-status";
import { StatusRepository } from "src/repositories/status-repository";

@Controller('status')
export class StatusController {
    constructor(private statusRepository: StatusRepository) { }

    @Get('listar')
    async getAllStatus() {
        return this.statusRepository.findAll();
    }

    @Get('listar/:id')
    async getStatusById(@Param('id', ParseIntPipe) id: number) {
        const status = await this.statusRepository.findById(id);
        if (!status) {
            throw new Error('Status não encontrado');
        }
        return status;
    }

    @Post('cadastrar')
    async postStatus(@Body() body: StatusBody) {
        const { descricao } = body;
        await this.statusRepository.create(descricao);
        return { message: 'Status cadastrado com sucesso!' };
    }

    @Put('atualizar/:id')
    async updateStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: StatusBody,
    ) {
        const { descricao } = body;
        await this.statusRepository.update(id, descricao);
        return { message: 'Status atualizado com sucesso!' };
    }

    @Delete('deletar/:id')
    async deleteStatus(@Param('id', ParseIntPipe) id: number) {
        await this.statusRepository.delete(id);
        return { message: 'Status deletado com sucesso!' };
    }
}