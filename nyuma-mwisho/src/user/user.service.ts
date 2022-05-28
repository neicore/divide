import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, EditUserDto } from './dto';
import { ReturnUser, SelectUser } from './types';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  select: SelectUser = {
    id: true,
    name: true,
    email: true,
    isEmailVerified: true,
    password: false,
    refreshToken: false,
    createdAt: true,
    updatedAt: true,
  };

  async create(dto: CreateUserDto): Promise<ReturnUser> {
    const user = await this.prisma.user.create({
      data: dto,
      select: this.select,
    });

    return user;
  }

  async edit(id: string, dto: EditUserDto): Promise<ReturnUser> {
    if (id) {
      const checkUser = await this.prisma.user.findUnique({
        where: { id },
      });

      if (!checkUser) throw new NotFoundException("User doesn't exist");
    }

    if (dto.email) {
      const checkEmail = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });

      if (checkEmail) throw new ConflictException('Email already in use');
    }

    const user = await this.prisma.user.update({
      where: { id },
      data: { ...dto },
      select: this.select,
    });

    return user;
  }

  async delete(userId: string) {
    if (userId) {
      const checkUser = await this.prisma.user.findUnique({
        where: { id: userId },
      });

      if (!checkUser) throw new NotFoundException("User doesn't exist");
    }

    const user = await this.prisma.user.delete({ where: { id: userId } });

    if (user) return { message: 'Account deleted successully' };
  }
}
