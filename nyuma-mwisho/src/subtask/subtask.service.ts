import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSubtaskDto, EditSubtaskDto, TaskDto } from './dto';

//TODO: Dry code
@Injectable()
export class SubtaskService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateSubtaskDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user)
      throw new UnauthorizedException('You cannot access this resource');

    dto.userId = userId;

    const subtask = await this.prisma.subtask.create({ data: dto });

    return subtask;
  }

  async getAll(userId: string, taskId: TaskDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user)
      throw new UnauthorizedException('You cannot access this resource');

    const task = await this.prisma.task.findUnique({
      where: { id: taskId.taskId },
    });

    if (!task) throw new NotFoundException('Could not find the task');

    const subtasks = await this.prisma.subtask.findMany({
      where: { taskId: taskId.taskId, userId: userId },
    });

    return subtasks;
  }

  async getOne(userId: string, subtaskId: number, taskId: TaskDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new UnauthorizedException('Cannot access this resource');

    const task = await this.prisma.task.findUnique({
      where: { id: taskId.taskId },
    });

    if (!task) throw new NotFoundException('Could not find the task');

    if (task.userId !== userId)
      throw new UnauthorizedException(
        'You are not allowed to edit this resource',
      );

    const subtask = await this.prisma.subtask.findFirst({
      where: { id: subtaskId, taskId: taskId.taskId, userId: userId },
    });

    if (!subtask) throw new NotFoundException('Subtask not found');

    return subtask;
  }

  async edit(userId: string, subtaskId: number, dto: EditSubtaskDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new UnauthorizedException('Cannot access this resource');

    const task = await this.prisma.task.findUnique({
      where: { id: dto.taskId },
    });

    if (!task) throw new NotFoundException('Could not find the task');

    if (task.userId !== userId)
      throw new UnauthorizedException(
        'You are not allowed to edit this resource',
      );

    const subtask = await this.prisma.subtask.findFirst({
      where: { id: subtaskId, taskId: dto.taskId, userId: userId },
    });

    if (!subtask) throw new NotFoundException('Subtask does not exist');

    const editedSubtask = await this.prisma.subtask.update({
      where: { id: subtaskId },
      data: { ...dto },
    });

    return editedSubtask;
  }

  async delete(userId: string, subtaskId: number, taskId: TaskDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new UnauthorizedException('Cannot access this resource');

    const task = await this.prisma.task.findUnique({
      where: { id: taskId.taskId },
    });

    if (!task) throw new NotFoundException('Could not find the task');

    if (task.userId !== userId)
      throw new UnauthorizedException(
        'You are not allowed to edit this resource',
      );

    const subtask = await this.prisma.subtask.findFirst({
      where: { id: subtaskId, taskId: taskId.taskId, userId: userId },
    });

    if (!subtask) throw new NotFoundException('Subtask does not exist');

    const deletedSubtask = await this.prisma.subtask.delete({
      where: { id: subtaskId },
    });

    if (deletedSubtask) return { message: 'Task deleted successfully' };
  }
}
