import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { CargoRepository } from './repositories/cargo-repository';
import { PrismaCargoRepository } from './repositories/prisma/prisma-cargo-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: CargoRepository,
      useClass: PrismaCargoRepository,
    },
  ],
})
export class AppModule {}
