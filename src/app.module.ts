import { PrismaClienteRepository } from './repositories/prisma/prisma-cliente-repository';
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
import { ClienteRepository } from './repositories/cliente-repository';
import { ClienteService } from './services/cliente.service';
import { ClienteController } from './controllers/cliente-controller';
import { FuncionarioController } from './controllers/funcionario-controller';
import { FuncionarioRepository } from './repositories/funcionario-repository';
import { PrismaFuncionarioRepository } from './repositories/prisma/prisma-funcionario-repository';
import { FuncionarioService } from './services/funcionario.service';
import { QuartoService } from './services/quarto.service';
import { QuartoRepository } from './repositories/quarto-repository';
import { PrismaQuartoRepository } from './repositories/prisma/prisma-quarto-repository';
import { QuartoController } from './controllers/quarto.controlller';
import { PlanoController } from './controllers/plano-controller';
import { PlanoRepository } from './repositories/plano-repository';
import { PrismaPlanoRepository } from './repositories/prisma/prisma-plano-repository';
import { PlanoService } from './services/plano.service';
import { ServicoController } from './controllers/servico-controller';
import { ServicoRepository } from './repositories/servico-repository';
import { PrismaServicoRepository } from './repositories/prisma/prisma-servico-repository';
import { ServicoService } from './services/servico.service';
import { TipoPagamentoController } from './controllers/tipo-pagamento-controller';
import { TipoPagamentoRepository } from './repositories/tipo-pagamento-repository';
import { PrismaTipoPagamentoRepository } from './repositories/prisma/prisma-tipo-pagamento-repository';
import { TipoPagamentoService } from './services/tipo-pagamento.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    CargoController,
    TipoQuartoController,
    StatusController,
    PermissaoController,
    PessoaController,
    ClienteController,
    FuncionarioController,
    QuartoController,
    PlanoController,
    ServicoController,
    TipoPagamentoController,
  ],
  providers: [
    PrismaService,
    {
      provide: CargoRepository,
      useClass: PrismaCargoRepository,
    },
    { provide: TipoQuartoRepository,
      useClass: PrismaTipoQuartoRepository },
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
      provide: ClienteRepository,
      useClass: PrismaClienteRepository,
    },
    {
      provide: FuncionarioRepository,
      useClass: PrismaFuncionarioRepository,
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
      provide: ServicoRepository,
      useClass: PrismaServicoRepository,
    },
    {
      provide: TipoPagamentoRepository,
      useClass: PrismaTipoPagamentoRepository,
    },
    PessoaService,
    TipoQuartoService,
    StatusService,
    PermissaoService,
    CargoService,
    ClienteService,
    FuncionarioService,
    QuartoService,
    PlanoService,
    ServicoService,
    TipoPagamentoService,
  ],
})
export class AppModule { }
