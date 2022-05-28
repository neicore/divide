import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReturnUser } from 'src/user/types';
import { UserService } from 'src/user/user.service';
import { LocalSigninDto, LocalSignupDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async localSignup(dto: LocalSignupDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (user) throw new ConflictException('Email already in use');

    const hashedPassword = await this.hashData(dto.password);
    dto.password = hashedPassword;

    const newUser = this.userService.create(dto);
    const tokens = await this.issueTokens(
      (
        await newUser
      ).id,
      (
        await newUser
      ).name,
      (
        await newUser
      ).email,
    );
    await this.updateRtHash((await newUser).id, tokens.refresh_token);
    return tokens;
  }

  async localSignin(dto: LocalSigninDto) {
    const user = await this.userService.getByEmail(dto.email);

    if (!user)
      throw new NotFoundException('No account is associated with that email');

    const checkPassword = await argon.verify(user.password, dto.password);

    if (!checkPassword) throw new ForbiddenException('Invalid credentials');

    const tokens = await this.issueTokens(user.id, user.name, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async localSignout(userId: string) {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        refreshToken: {
          not: null,
        },
      },
      data: {
        refreshToken: null,
      },
    });

    return true;
  }

  async refreshToken(userId: string, rt: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user || !user.refreshToken)
      throw new ForbiddenException('Access Denied');

    const rtMatches = await argon.verify(user.refreshToken, rt);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.issueTokens(user.id, user.name, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  hashData(data: string) {
    return argon.hash(data);
  }

  async updateRtHash(userId: string, rt: string) {
    const refreshToken = await this.hashData(rt);
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        refreshToken: refreshToken,
      },
    });
  }

  async issueTokens(userId: string, name: string, email: string) {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          name,
          email,
        },
        { secret: 'at-secret', expiresIn: 60 * 15 }, //15 minutes,
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          name,
          email,
        },
        { secret: 'rt-secret', expiresIn: 60 * 60 * 24 * 7 }, //a week,
      ),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
