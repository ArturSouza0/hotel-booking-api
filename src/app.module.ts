import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { CargoRepository } from './repositories/cargo-repository';
import { PrismaCargoRepository } from './repositories/prisma/prisma-cargo-repository';
import { CargoController } from './controllers/cargo-controller';
import { TipoQuartoRepository } from './repositories/tipo-quarto-repository';
import { PrismaTipoQuartoRepository } from './repositories/prisma/prisma-tipo-quarto-repository';
import { TipoQuartoController } from './controllers/tipo-quarto-controller';

@Module({
  imports: [],
  controllers: [AppController, CargoController, TipoQuartoController],
  providers: [
    PrismaService,
    {
      provide: CargoRepository,
      useClass: PrismaCargoRepository,
    },
    { provide: TipoQuartoRepository, useClass: PrismaTipoQuartoRepository },
  ],
})
export class AppModule {}
