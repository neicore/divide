import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GetCurrentUser } from 'src/common/decorators';
import { CreateSubtaskDto, EditSubtaskDto, TaskDto } from './dto';
import { SubtaskService } from './subtask.service';

@Controller('subtask')
export class SubtaskController {
  constructor(private subtaskService: SubtaskService) {}

  @Post()
  create(@GetCurrentUser() userId: string, @Body() dto: CreateSubtaskDto) {
    return this.subtaskService.create(userId, dto);
  }

  @Get()
  getAll(@GetCurrentUser() userId: string, @Body() taskId: TaskDto) {
    return this.subtaskService.getAll(userId, taskId);
  }

  @Get(':id')
  getOne(
    @GetCurrentUser() userId: string,
    @Param('id') subtaskId: number,
    @Body() taskId: TaskDto,
  ) {
    return this.subtaskService.getOne(userId, subtaskId, taskId);
  }

  @Patch(':id')
  edit(
    @GetCurrentUser() userId: string,
    @Param('id') subtaskId: number,
    @Body() dto: EditSubtaskDto,
  ) {
    return this.subtaskService.edit(userId, subtaskId, dto);
  }

  @Delete(':id')
  delete(
    @GetCurrentUser() userId: string,
    @Param('id') subtaskId: number,
    @Body() taskId: TaskDto,
  ) {
    return this.subtaskService.delete(userId, subtaskId, taskId);
  }
}
