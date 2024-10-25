import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { TipoQuartoRepository } from './repositories/tipo-quarto-repository';
import { PrismaTipoQuartoRepository } from './repositories/prisma/prisma-tipo-quarto-repository';
import { TipoQuartoController } from './controllers/tipo-quarto-controller';
import { StatusRepository } from './repositories/status-repository';
import { PrismaStatusRepository } from './repositories/prisma/prisma-status-repository';
import { StatusController } from './controllers/status-controlller';
import { PermissaoRepository } from './repositories/permissao-repository';
import { PermissaoController } from './controllers/permissao-controller';
import { PrismaPermissaoRepository } from './repositories/prisma/prisma-permissao-repository';
import { PessoaRepository } from './repositories/pessoa-repository';
import { PrismaPessoaRepository } from './repositories/prisma/prisma-pessoa-repository';
import { TipoQuartoService } from './services/tipo-quarto.service';
import { StatusService } from './services/status.service';
import { PermissaoService } from './services/permissao.service';
import { QuartoService } from './services/quarto.service';
import { QuartoRepository } from './repositories/quarto-repository';
import { PrismaQuartoRepository } from './repositories/prisma/prisma-quarto-repository';
import { QuartoController } from './controllers/quarto.controlller';
import { PlanoController } from './controllers/plano-controller';
import { PlanoRepository } from './repositories/plano-repository';
import { PrismaPlanoRepository } from './repositories/prisma/prisma-plano-repository';
import { PlanoService } from './services/plano.service';
import { TipoPagamentoController } from './controllers/tipo-pagamento-controller';
import { TipoPagamentoRepository } from './repositories/tipo-pagamento-repository';
import { PrismaTipoPagamentoRepository } from './repositories/prisma/prisma-tipo-pagamento-repository';
import { TipoPagamentoService } from './services/tipo-pagamento.service';
import { PagamentoService } from './services/pagamento.service';
import { PagamentoRepository } from './repositories/pagamento-repository';
import { PrismaPagamentoRepository } from './repositories/prisma/prisma-pagamento-repository';
import { PagamentoController } from './controllers/pagamento-controller';
import { ReservaController } from './controllers/reserva-controller';
import { ReservaService } from './services/reserva.service';
import { ReservaRepository } from './repositories/reserva-repository';
import { PrismaReservaRepository } from './repositories/prisma/prisma-reserva-repository';
import { HashService } from './services/hash/hash.service';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { PessoaController } from './Pessoa/pessoa-controller';
import { PessoaService } from './Pessoa/pessoa.service';
import { PessoaPermissaoService } from './services/pessoa-permissao.service';
import { PessoaPermissaoRepository } from './repositories/pessoa-permissao-repository';
import { PrismaPessoaPermissaoRepository } from './repositories/prisma/prisma-pessoa-permissao-respository';
import { PessoaPermissaoController } from './controllers/pessoa-permissao-controller';

@Module({
  imports: [AuthModule, forwardRef(() => AuthModule)],
  controllers: [
    AppController,
    TipoQuartoController,
    StatusController,
    PermissaoController,
    PessoaController,
    QuartoController,
    PlanoController,
    TipoPagamentoController,
    PagamentoController,
    ReservaController,
    PessoaPermissaoController,
  ],
  providers: [
    PrismaService,
    {
      provide: TipoQuartoRepository,
      useClass: PrismaTipoQuartoRepository,
    },
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
    {
      provide: QuartoRepository,
      useClass: PrismaQuartoRepository,
    },
    {
      provide: PlanoRepository,
      useClass: PrismaPlanoRepository,
    },
    {
      provide: TipoPagamentoRepository,
      useClass: PrismaTipoPagamentoRepository,
    },
    {
      provide: PagamentoRepository,
      useClass: PrismaPagamentoRepository,
    },
    {
      provide: ReservaRepository,
      useClass: PrismaReservaRepository,
    },
    {
      provide: PessoaPermissaoRepository,
      useClass: PrismaPessoaPermissaoRepository,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    PessoaService,
    TipoQuartoService,
    StatusService,
    PermissaoService,
    QuartoService,
    PlanoService,
    TipoPagamentoService,
    PagamentoService,
    ReservaService,
    PessoaPermissaoService,
    HashService,
  ],
})
export class AppModule {}
