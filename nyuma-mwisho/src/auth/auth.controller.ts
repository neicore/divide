import { Body, Controller, Post } from '@nestjs/common';
import {
  GetCurrentUser,
  GetCurrentUserId,
  Public,
} from 'src/common/decorators';
import { AuthService } from './auth.service';
import { LocalSigninDto, LocalSignupDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('local/signup')
  localSignup(@Body() dto: LocalSignupDto) {
    return this.authService.localSignup(dto);
  }

  @Public()
  @Post('local/signin')
  localSignin(@Body() dto: LocalSigninDto) {
    return this.authService.localSignin(dto);
  }

  @Post('local/signout')
  localSignout(@GetCurrentUserId() userId: string) {
    return this.authService.localSignout(userId);
  }

  @Public()
  @Post('local/refreshtoken')
  refreshToken(
    @GetCurrentUserId() userId: string,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ) {
    return this.authService.refreshToken(userId, refreshToken);
  }
}
