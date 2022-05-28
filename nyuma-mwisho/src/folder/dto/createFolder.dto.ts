import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFolderDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  color: string;
}
