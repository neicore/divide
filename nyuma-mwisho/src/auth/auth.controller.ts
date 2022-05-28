import { Body, Controller, Post } from '@nestjs/common';
import {
  GetCurrentUser,
  GetCurrentUserId,
  Public,
} from 'src/common/decorators';
import { AuthService } from './auth.service';
import { LocalSigninDto, LocalSignupDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('local/signup')
  async localSignup(@Body() dto: LocalSignupDto): Promise<Tokens> {
    return await this.authService.localSignup(dto);
  }

  @Public()
  @Post('local/signin')
  async localSignin(@Body() dto: LocalSigninDto): Promise<Tokens> {
    return await this.authService.localSignin(dto);
  }

  @Post('local/signout')
  async localSignout(@GetCurrentUserId() userId: string): Promise<boolean> {
    return await this.authService.localSignout(userId);
  }

  @Public()
  @Post('local/refreshtoken')
  async refreshToken(
    @GetCurrentUserId() userId: string,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ): Promise<Tokens> {
    return await this.authService.refreshToken(userId, refreshToken);
  }
}
