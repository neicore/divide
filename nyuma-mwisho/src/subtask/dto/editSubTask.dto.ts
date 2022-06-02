import { IsOptional, IsString } from 'class-validator';
import { CreateSubtaskDto } from './createSubtask.dto';

export class EditSubtaskDto extends CreateSubtaskDto {
  @IsOptional()
  @IsString()
  title: string;
}
