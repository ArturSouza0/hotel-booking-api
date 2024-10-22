import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller('app')
export class AppController {
  constructor(private prisma: PrismaService) {}
  @Get('status')
  getStatus() {
    return this.prisma.pessoaPermissao.findMany();
    // return { status: 'API is running smoothly!' };
  }
}
