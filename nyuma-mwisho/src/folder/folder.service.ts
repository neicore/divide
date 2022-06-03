import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFolderDto, EditFolderDto } from './dto';

// TODO: DRY this code
@Injectable()
export class FolderService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateFolderDto) {
    const user = await this.getUser(userId);

    if (!user) throw new NotFoundException('User not found'); // NOTE TO SELF: find a way to not get to this point if user doesn't exist in the first place

    return await this.prisma.folder.create({
      data: { userId, ...dto },
    });
  }

  async getAll(userId: string) {
    const user = await this.getUser(userId);

    if (!user) throw new NotFoundException('User not found');

    return await this.prisma.folder.findMany({ where: { userId } });
  }

  async getOne(userId: string, folderId: number) {
    const user = await this.getUser(userId);

    if (!user) throw new NotFoundException('User not found');

    const folder = await this.getFolder(folderId);

    if (!folder) throw new NotFoundException('Folder not found');

    if (folder.userId !== userId)
      throw new UnauthorizedException("Folder doens't belong to user");

    return folder;
  }

  async edit(userId: string, folderId: number, dto: EditFolderDto) {
    const user = await this.getUser(userId);

    if (!user) throw new NotFoundException('User not found');

    const folder = await this.getFolder(folderId);

    if (!folder) throw new NotFoundException('Folder not found');

    if (folder.userId !== userId)
      throw new UnauthorizedException("Folder doens't belong to user");

    return await this.prisma.folder.update({
      where: { id: folderId },
      data: { userId, ...dto },
    });
  }

  async delete(userId: string, folderId: number) {
    const user = await this.getUser(userId);

    if (!user) throw new NotFoundException('User not found');

    const folder = await this.getFolder(folderId);

    if (!folder) throw new NotFoundException('Folder not found');

    if (folder.userId !== userId)
      throw new UnauthorizedException("Folder doens't belong to user");

    const deleteFolder = await this.prisma.folder.delete({
      where: { id: folderId },
    });

    if (deleteFolder) return { message: 'Folder deleted successully' };
  }

  async getUser(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async getFolder(id: number) {
    return await this.prisma.folder.findUnique({ where: { id } });
  }
}
