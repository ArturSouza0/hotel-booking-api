BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Pessoa] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nome] NVARCHAR(255) NOT NULL,
    [sobrenome] NVARCHAR(255) NOT NULL,
    [email] NVARCHAR(255) NOT NULL,
    [senha] NVARCHAR(255) NOT NULL,
    [cpf] NVARCHAR(11) NOT NULL,
    [ativo] BIT CONSTRAINT [Pessoa_ativo_df] DEFAULT 1,
    [numero_contato] NVARCHAR(20) NOT NULL,
    [endereco] NVARCHAR(255),
    [cidade] NVARCHAR(255),
    [pais] NVARCHAR(255),
    [data_nascimento] DATE,
    [comprovante_residencia] NVARCHAR(255),
    [nacionalidade] NVARCHAR(100),
    [genero] NVARCHAR(50),
    [data_criacao] DATETIME CONSTRAINT [Pessoa_data_criacao_df] DEFAULT CURRENT_TIMESTAMP,
    [data_atualizacao] DATETIME2,
    CONSTRAINT [Pessoa_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Pessoa_email_key] UNIQUE NONCLUSTERED ([email]),
    CONSTRAINT [Pessoa_cpf_key] UNIQUE NONCLUSTERED ([cpf])
);

-- CreateTable
CREATE TABLE [dbo].[Permissao] (
    [id] INT NOT NULL IDENTITY(1,1),
    [descricao] NVARCHAR(255) NOT NULL,
    CONSTRAINT [Permissao_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Permissao_descricao_key] UNIQUE NONCLUSTERED ([descricao])
);

-- CreateTable
CREATE TABLE [dbo].[PessoaPermissao] (
    [id] INT NOT NULL IDENTITY(1,1),
    [pessoa_id] INT NOT NULL,
    [permissao_id] INT NOT NULL,
    CONSTRAINT [PessoaPermissao_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Reserva] (
    [id] INT NOT NULL IDENTITY(1,1),
    [pessoa_id] INT NOT NULL,
    [quarto_id] INT NOT NULL,
    [data_checkin] DATETIME NOT NULL,
    [data_checkout] DATETIME NOT NULL,
    [status_id] INT NOT NULL,
    [plano_id] INT NOT NULL,
    CONSTRAINT [Reserva_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Quarto] (
    [id] INT NOT NULL IDENTITY(1,1),
    [numero] NVARCHAR(255) NOT NULL,
    [tipo_quarto_id] INT NOT NULL,
    [id_status] INT NOT NULL,
    CONSTRAINT [Quarto_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Quarto_numero_key] UNIQUE NONCLUSTERED ([numero])
);

-- CreateTable
CREATE TABLE [dbo].[TipoQuarto] (
    [id] INT NOT NULL IDENTITY(1,1),
    [descricao] NVARCHAR(255) NOT NULL,
    [preco_diaria] DECIMAL(10,2) NOT NULL,
    CONSTRAINT [TipoQuarto_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Status] (
    [id] INT NOT NULL IDENTITY(1,1),
    [descricao] NVARCHAR(255) NOT NULL,
    CONSTRAINT [Status_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Status_descricao_key] UNIQUE NONCLUSTERED ([descricao])
);

-- CreateTable
CREATE TABLE [dbo].[Pagamento] (
    [id] INT NOT NULL IDENTITY(1,1),
    [pessoa_id] INT NOT NULL,
    [reserva_id] INT NOT NULL,
    [tipo_pagamento_id] INT NOT NULL,
    [valor] DECIMAL(10,2) NOT NULL,
    [data_pagamento] DATETIME CONSTRAINT [Pagamento_data_pagamento_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Pagamento_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[TipoPagamento] (
    [id] INT NOT NULL IDENTITY(1,1),
    [descricao] NVARCHAR(255) NOT NULL,
    CONSTRAINT [TipoPagamento_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Plano] (
    [id] INT NOT NULL IDENTITY(1,1),
    [descricao] NVARCHAR(255) NOT NULL,
    [preco] DECIMAL(10,2) NOT NULL,
    CONSTRAINT [Plano_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[PessoaPermissao] ADD CONSTRAINT [PessoaPermissao_pessoa_id_fkey] FOREIGN KEY ([pessoa_id]) REFERENCES [dbo].[Pessoa]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PessoaPermissao] ADD CONSTRAINT [PessoaPermissao_permissao_id_fkey] FOREIGN KEY ([permissao_id]) REFERENCES [dbo].[Permissao]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Reserva] ADD CONSTRAINT [Reserva_pessoa_id_fkey] FOREIGN KEY ([pessoa_id]) REFERENCES [dbo].[Pessoa]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Reserva] ADD CONSTRAINT [Reserva_quarto_id_fkey] FOREIGN KEY ([quarto_id]) REFERENCES [dbo].[Quarto]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Reserva] ADD CONSTRAINT [Reserva_status_id_fkey] FOREIGN KEY ([status_id]) REFERENCES [dbo].[Status]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Reserva] ADD CONSTRAINT [Reserva_plano_id_fkey] FOREIGN KEY ([plano_id]) REFERENCES [dbo].[Plano]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Quarto] ADD CONSTRAINT [Quarto_tipo_quarto_id_fkey] FOREIGN KEY ([tipo_quarto_id]) REFERENCES [dbo].[TipoQuarto]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Quarto] ADD CONSTRAINT [Quarto_id_status_fkey] FOREIGN KEY ([id_status]) REFERENCES [dbo].[Status]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Pagamento] ADD CONSTRAINT [Pagamento_pessoa_id_fkey] FOREIGN KEY ([pessoa_id]) REFERENCES [dbo].[Pessoa]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Pagamento] ADD CONSTRAINT [Pagamento_reserva_id_fkey] FOREIGN KEY ([reserva_id]) REFERENCES [dbo].[Reserva]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Pagamento] ADD CONSTRAINT [Pagamento_tipo_pagamento_id_fkey] FOREIGN KEY ([tipo_pagamento_id]) REFERENCES [dbo].[TipoPagamento]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
