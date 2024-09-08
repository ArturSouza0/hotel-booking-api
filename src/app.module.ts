import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { CargoRepository } from './repositories/cargo-repository';
import { PrismaCargoRepository } from './repositories/prisma/prisma-cargo-repository';
import { CargoController } from './controllers/cargo-controller';
import { TipoQuartoRepository } from './repositories/tipo-quarto-repository';
import { PrismaTipoQuartoRepository } from './repositories/prisma/prisma-tipo-quarto-repository';
import { TipoQuartoController } from './controllers/tipo-quarto-controller';
import { StatusRepository } from './repositories/status-repository';
import { PrismaStatusRepository } from './repositories/prisma/prisma-status-repository';
import { StatusController } from './controllers/status-controlller';
import { PermissaoRepository } from './repositories/permissao-repository';
import { PermissaoController } from './controllers/permissao-controller';
import { PrismaPermissaoRepository } from './repositories/prisma/prisma-permissao-repository';
import { PessoaController } from './controllers/pessoa-controller';
import { PessoaRepository } from './repositories/pessoa-repository';
import { PrismaPessoaRepository } from './repositories/prisma/prisma-pessoa-repository';
import { PessoaService } from './services/pessoa.service';
import { TipoQuartoService } from './services/tipo-quarto.service';
import { StatusService } from './services/status.service';
import { PermissaoService } from './services/permissao.service';
import { CargoService } from './services/cargo.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    CargoController,
    TipoQuartoController,
    StatusController,
    PermissaoController,
    PessoaController,
  ],
  providers: [
    PrismaService,
    {
      provide: CargoRepository,
      useClass: PrismaCargoRepository,
    },
    { provide: TipoQuartoRepository, useClass: PrismaTipoQuartoRepository },
    {
      provide: StatusRepository,
      useClass: PrismaStatusRepository,
    },
    {
      provide: PermissaoRepository,
      useClass: PrismaPermissaoRepository,
    },
    {
      provide: PessoaRepository,
      useClass: PrismaPessoaRepository,
    },
    PessoaService,
    TipoQuartoService,
    StatusService,
    PermissaoService,
    CargoService,
  ],
})
export class AppModule {}
