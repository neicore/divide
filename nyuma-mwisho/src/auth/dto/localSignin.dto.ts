import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LocalSigninDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
