import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/common/decorators';
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
  localSignout() {
    return this.authService.localSignout;
  }

  @Public()
  @Post('local/refreshtoken')
  refreshToken() {
    return this.authService.refreshToken;
  }
}
