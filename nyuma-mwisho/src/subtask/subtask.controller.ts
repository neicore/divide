import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { GetCurrentUserId } from '../common/decorators';
import { CreateSubtaskDto, EditSubtaskDto, TaskDto } from './dto';
import { SubtaskService } from './subtask.service';

@Controller('subtask')
export class SubtaskController {
  constructor(private subtaskService: SubtaskService) {}

  @Post()
  create(@GetCurrentUserId() userId: string, @Body() dto: CreateSubtaskDto) {
    return this.subtaskService.create(userId, dto);
  }

  @Get()
  getAll(@GetCurrentUserId() userId: string, @Body() taskId: TaskDto) {
    return this.subtaskService.getAll(userId, taskId);
  }

  @Get(':id')
  getOne(
    @GetCurrentUserId() userId: string,
    @Param('id', ParseIntPipe) subtaskId: number,
    @Body() taskId: TaskDto,
  ) {
    return this.subtaskService.getOne(userId, subtaskId, taskId);
  }

  @Patch(':id')
  edit(
    @GetCurrentUserId() userId: string,
    @Param('id', ParseIntPipe) subtaskId: number,
    @Body() dto: EditSubtaskDto,
  ) {
    return this.subtaskService.edit(userId, subtaskId, dto);
  }

  @Delete(':id')
  delete(
    @GetCurrentUserId() userId: string,
    @Param('id', ParseIntPipe) subtaskId: number,
    @Body() taskId: TaskDto,
  ) {
    return this.subtaskService.delete(userId, subtaskId, taskId);
  }
}
