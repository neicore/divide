import { IsOptional, IsString } from 'class-validator';

export class EditFolderDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  color: string;
}
