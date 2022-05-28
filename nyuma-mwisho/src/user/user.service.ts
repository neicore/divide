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

  async create(dto: CreateUserDto): Promise<ReturnUser> {
    const user = await this.prisma.user.create({
      data: dto,
      select: this.select,
    });

    return user;
  }

  async getAll(): Promise<ReturnUser[]> {
    const users = await this.prisma.user.findMany({ select: this.select });

    if (!users) throw new NotFoundException('No users were found');

    return users;
  }

  async getById(id: string): Promise<ReturnUser> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: this.select,
    });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async getByEmail(email: string): Promise<ReturnUser> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: this.select,
    });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }
}
