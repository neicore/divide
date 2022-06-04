import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  Get,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { GetCurrentUserId } from '../common/decorators';
import { CreateFolderDto, EditFolderDto } from './dto';
import { FolderService } from './folder.service';

@Controller('folder')
export class FolderController {
  constructor(private folderService: FolderService) {}

  @Post()
  async create(
    @GetCurrentUserId() userId: string,
    @Body() dto: CreateFolderDto,
  ) {
    return await this.folderService.create(userId, dto);
  }

  @Get()
  async getAll(@GetCurrentUserId() userId: string) {
    return await this.folderService.getAll(userId);
  }

  @Get(':id')
  async getOne(
    @GetCurrentUserId() userId: string,
    @Param('id', ParseIntPipe) folderId: number,
  ) {
    return await this.folderService.getOne(userId, folderId);
  }

  @Patch(':id')
  async edit(
    @GetCurrentUserId() userId: string,
    @Param('id', ParseIntPipe) folderId: number,
    @Body() dto: EditFolderDto,
  ) {
    return await this.folderService.edit(userId, folderId, dto);
  }
  //delete a folder
  @Delete(':id')
  async delete(
    @GetCurrentUserId() userId: string,
    @Param('id', ParseIntPipe) folderId: number,
  ) {
    return await this.folderService.delete(userId, folderId);
  }
}
