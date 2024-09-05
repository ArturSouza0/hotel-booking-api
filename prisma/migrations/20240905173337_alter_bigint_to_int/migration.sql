BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[cargo] (
    [id] INT NOT NULL IDENTITY(1,1),
    [descricao] NVARCHAR(255) NOT NULL,
    CONSTRAINT [PK__cargo__3213E83F0DF41DC5] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[clientes] (
    [id] INT NOT NULL IDENTITY(1,1),
    [pessoa_id] INT,
    [numero_fidelidade] NVARCHAR(50),
    [observacoes] NVARCHAR(255),
    CONSTRAINT [PK__clientes__3213E83F1B4EA62A] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[funcionarios] (
    [id] INT NOT NULL IDENTITY(1,1),
    [pessoa_id] INT,
    [cargo_id] INT,
    CONSTRAINT [PK__funciona__3213E83F4C53CA17] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[pagamento] (
    [id] INT NOT NULL IDENTITY(1,1),
    [reserva_id] INT,
    [tipo_pagamento_id] INT,
    [valor] DECIMAL(10,2) NOT NULL,
    [data_pagamento] DATETIMEOFFSET CONSTRAINT [DF__pagamento__data___628FA481] DEFAULT sysdatetimeoffset(),
    CONSTRAINT [PK__pagament__3213E83FB4811029] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[permissoes] (
    [id] INT NOT NULL IDENTITY(1,1),
    [descricao] NVARCHAR(255) NOT NULL,
    CONSTRAINT [PK__permisso__3213E83F0BFA29D0] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [UQ__permisso__91D38C2813CA3D68] UNIQUE NONCLUSTERED ([descricao])
);

-- CreateTable
CREATE TABLE [dbo].[pessoa] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nome] NVARCHAR(255) NOT NULL,
    [sobrenome] NVARCHAR(255) NOT NULL,
    [email] NVARCHAR(255) NOT NULL,
    [senha] NVARCHAR(255) NOT NULL,
    [cpf] NVARCHAR(11) NOT NULL,
    [identidade] NVARCHAR(10),
    [numero_contato] NVARCHAR(20) NOT NULL,
    [endereco] NVARCHAR(255),
    [cidade] NVARCHAR(255),
    [pais] NVARCHAR(255),
    [comprovante_residencia] NVARCHAR(255),
    [outros_documentos] NVARCHAR(255),
    [permissao_id] INT,
    [data_nascimento] DATE,
    [genero] NVARCHAR(50),
    [nacionalidade] NVARCHAR(100),
    [ativo] BIT NOT NULL CONSTRAINT [DF__pessoa__ativo__4CA06362] DEFAULT 1,
    [data_criacao] DATETIMEOFFSET CONSTRAINT [DF__pessoa__data_cri__4D94879B] DEFAULT sysdatetimeoffset(),
    [data_atualizacao] DATETIMEOFFSET CONSTRAINT [DF__pessoa__data_atu__4E88ABD4] DEFAULT sysdatetimeoffset(),
    CONSTRAINT [PK__pessoa__3213E83F8D3747E6] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [UQ__pessoa__AB6E61642B83EF8A] UNIQUE NONCLUSTERED ([email]),
    CONSTRAINT [UQ__pessoa__D836E71F3D216C35] UNIQUE NONCLUSTERED ([cpf]),
    CONSTRAINT [UQ__pessoa__D2CB21E3F027E52C] UNIQUE NONCLUSTERED ([identidade])
);

-- CreateTable
CREATE TABLE [dbo].[pessoa_permissao] (
    [id] INT NOT NULL IDENTITY(1,1),
    [pessoa_id] INT,
    [permissao_id] INT,
    CONSTRAINT [PK__pessoa_p__3213E83F492E3E53] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[plano_servico] (
    [id] INT NOT NULL IDENTITY(1,1),
    [plano_id] INT,
    [servico_id] INT,
    CONSTRAINT [PK__plano_se__3213E83F1BFE85DF] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[planos] (
    [id] INT NOT NULL IDENTITY(1,1),
    [descricao] NVARCHAR(255) NOT NULL,
    [preco] DECIMAL(10,2) NOT NULL,
    CONSTRAINT [PK__planos__3213E83F889432A9] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[quarto] (
    [id] INT NOT NULL IDENTITY(1,1),
    [numero] NVARCHAR(255) NOT NULL,
    [tipo_quarto_id] INT,
    [id_status] INT,
    [imagem] NVARCHAR(255),
    CONSTRAINT [PK__quarto__3213E83F2756B348] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[reserva] (
    [id] INT NOT NULL IDENTITY(1,1),
    [cliente_id] INT,
    [quarto_id] INT,
    [data_checkin] DATETIMEOFFSET NOT NULL,
    [data_checkout] DATETIMEOFFSET NOT NULL,
    [status_id] INT,
    [servico_id] INT,
    [plano_id] INT,
    CONSTRAINT [PK__reserva__3213E83F36448C49] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[servicos] (
    [id] INT NOT NULL IDENTITY(1,1),
    [descricao] NVARCHAR(255) NOT NULL,
    [preco] DECIMAL(10,2) NOT NULL,
    CONSTRAINT [PK__servicos__3213E83F9CC923BA] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[status] (
    [id] INT NOT NULL IDENTITY(1,1),
    [descricao] NVARCHAR(255) NOT NULL,
    CONSTRAINT [PK__status__3213E83F6DC0B385] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [UQ__status__91D38C28B47BB85D] UNIQUE NONCLUSTERED ([descricao])
);

-- CreateTable
CREATE TABLE [dbo].[tipo_pagamento] (
    [id] INT NOT NULL IDENTITY(1,1),
    [descricao] NVARCHAR(255) NOT NULL,
    CONSTRAINT [PK__tipo_pag__3213E83F95399F62] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[tipo_quarto] (
    [id] INT NOT NULL IDENTITY(1,1),
    [descricao] NVARCHAR(255) NOT NULL,
    [preco_diaria] DECIMAL(10,2) NOT NULL,
    CONSTRAINT [PK__tipo_qua__3213E83F90B34C97] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[clientes] ADD CONSTRAINT [FK__clientes__pessoa__5165187F] FOREIGN KEY ([pessoa_id]) REFERENCES [dbo].[pessoa]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[funcionarios] ADD CONSTRAINT [FK__funcionar__cargo__571DF1D5] FOREIGN KEY ([cargo_id]) REFERENCES [dbo].[cargo]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[funcionarios] ADD CONSTRAINT [FK__funcionar__pesso__5629CD9C] FOREIGN KEY ([pessoa_id]) REFERENCES [dbo].[pessoa]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[pagamento] ADD CONSTRAINT [FK__pagamento__reser__60A75C0F] FOREIGN KEY ([reserva_id]) REFERENCES [dbo].[reserva]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[pagamento] ADD CONSTRAINT [FK__pagamento__tipo___619B8048] FOREIGN KEY ([tipo_pagamento_id]) REFERENCES [dbo].[tipo_pagamento]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[pessoa] ADD CONSTRAINT [FK__pessoa__permissa__4BAC3F29] FOREIGN KEY ([permissao_id]) REFERENCES [dbo].[permissoes]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[pessoa_permissao] ADD CONSTRAINT [FK__pessoa_pe__permi__6A30C649] FOREIGN KEY ([permissao_id]) REFERENCES [dbo].[permissoes]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[pessoa_permissao] ADD CONSTRAINT [FK__pessoa_pe__pesso__693CA210] FOREIGN KEY ([pessoa_id]) REFERENCES [dbo].[pessoa]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[plano_servico] ADD CONSTRAINT [FK__plano_ser__plano__656C112C] FOREIGN KEY ([plano_id]) REFERENCES [dbo].[planos]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[plano_servico] ADD CONSTRAINT [FK__plano_ser__servi__66603565] FOREIGN KEY ([servico_id]) REFERENCES [dbo].[servicos]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[quarto] ADD CONSTRAINT [FK__quarto__id_statu__3D5E1FD2] FOREIGN KEY ([id_status]) REFERENCES [dbo].[status]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[quarto] ADD CONSTRAINT [FK__quarto__tipo_qua__3C69FB99] FOREIGN KEY ([tipo_quarto_id]) REFERENCES [dbo].[tipo_quarto]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[reserva] ADD CONSTRAINT [FK__reserva__cliente__59FA5E80] FOREIGN KEY ([cliente_id]) REFERENCES [dbo].[clientes]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[reserva] ADD CONSTRAINT [FK__reserva__plano_i__5DCAEF64] FOREIGN KEY ([plano_id]) REFERENCES [dbo].[planos]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[reserva] ADD CONSTRAINT [FK__reserva__quarto___5AEE82B9] FOREIGN KEY ([quarto_id]) REFERENCES [dbo].[quarto]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[reserva] ADD CONSTRAINT [FK__reserva__servico__5CD6CB2B] FOREIGN KEY ([servico_id]) REFERENCES [dbo].[servicos]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[reserva] ADD CONSTRAINT [FK__reserva__status___5BE2A6F2] FOREIGN KEY ([status_id]) REFERENCES [dbo].[status]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
