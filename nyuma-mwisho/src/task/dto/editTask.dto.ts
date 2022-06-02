import { IsOptional } from 'class-validator';
import { CreateTaskDto } from './createTask.dto';

export class EditTaskDto extends CreateTaskDto {
  @IsOptional()
  title: string;

  @IsOptional()
  folderId: number;
}
