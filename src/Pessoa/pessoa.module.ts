import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { HashService } from 'src/services/hash/hash.service';
import { PrismaService } from 'src/database/prisma.service';
import { PessoaRepository } from 'src/repositories/pessoa-repository';
import { PrismaPessoaRepository } from 'src/repositories/prisma/prisma-pessoa-repository';
import { PessoaController } from './pessoa-controller';

@Module({
  providers: [
    PessoaService,
    HashService,
    PrismaService,
    {
      provide: PessoaRepository,
      useClass: PrismaPessoaRepository,
    },
  ],
  controllers: [PessoaController],
  exports: [PessoaRepository, PessoaService],
})
export class PessoaModule {}
