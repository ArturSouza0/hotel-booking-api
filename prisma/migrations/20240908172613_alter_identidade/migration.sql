BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[pessoa] DROP CONSTRAINT [UQ__pessoa__D2CB21E3F027E52C];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
