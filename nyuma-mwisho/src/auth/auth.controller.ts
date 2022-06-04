import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { GetCurrentUser, GetCurrentUserId, Public } from '../common/decorators';
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

  @Throttle(5, 60)
  @Public()
  @Post('local/signin')
  @HttpCode(200)
  async localSignin(@Body() dto: LocalSigninDto): Promise<Tokens> {
    return await this.authService.localSignin(dto);
  }

  @Post('local/signout')
  async localSignout(@GetCurrentUserId() sub: string): Promise<boolean> {
    return await this.authService.localSignout(sub);
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
