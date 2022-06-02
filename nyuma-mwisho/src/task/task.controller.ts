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
import { CreateTaskDto, EditTaskDto } from './dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  create(@GetCurrentUser() userId: string, @Body() dto: CreateTaskDto) {
    return this.taskService.create(userId, dto);
  }

  @Get()
  getAll(@GetCurrentUser() userId: string) {
    return this.taskService.getAll(userId);
  }

  @Get(':id')
  getOne(@GetCurrentUser() userId: string, @Param('id') taskId: string) {
    return this.taskService.getOne(userId, taskId);
  }

  @Patch(':id')
  edit(
    @GetCurrentUser() userId: string,
    @Param('id') taskId: string,
    @Body() dto: EditTaskDto,
  ) {
    return this.taskService.edit(userId, taskId, dto);
  }

  @Delete(':id')
  delete(@GetCurrentUser() userId: string, @Param('id') taskId: string) {
    return this.taskService.delete(userId, taskId);
  }
}
