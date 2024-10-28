import { IsDateString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class ReservaBody {
  id?: number;

  @IsNotEmpty({ message: 'A pessoa é obrigatória!' })
  @IsInt({ message: 'O ID da pessoa deve ser um número inteiro.' })
  pessoa_id: number;

  @IsNotEmpty({ message: 'O quarto é obrigatório!' })
  @IsInt()
  quarto_id: number;

  @IsNotEmpty({ message: 'A data de check-in é obrigatória!' })
  @IsDateString()
  data_checkin: Date | string;

  @IsNotEmpty({ message: 'A data de checkout é obrigatória!' })
  @IsDateString()
  data_checkout: Date | string;

  @IsOptional()
  @IsInt()
  status_id?: number;

  @IsNotEmpty({ message: 'O plano é obrigatório!' })
  @IsInt()
  plano_id: number;
}
