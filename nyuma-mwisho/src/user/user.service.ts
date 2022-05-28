import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto';
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

  async create(dto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: dto,
      select: this.select,
    });

    return user;
  }

  async getAll(): Promise<ReturnUser[]> {
    const users = await this.prisma.user.findMany();

    if (!users) throw new NotFoundException('No users were found');

    return users;
  }

  async getById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: this.select,
    });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async getByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }
}
