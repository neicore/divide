import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateSubtaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsDate()
  startDate: Date;

  @IsOptional()
  @IsDate()
  dueDate: Date;

  @IsOptional()
  @IsDate()
  reminder: Date;

  @IsOptional()
  @IsBoolean()
  isCompleted: boolean;

  @IsNotEmpty()
  @IsString()
  taskId: string;

  @IsOptional()
  @IsString()
  userId: string;
}
