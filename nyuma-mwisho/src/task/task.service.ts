import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto, EditTaskDto } from './dto';

//TODO: Dry this shitty code
@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateTaskDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new UnauthorizedException('Cannot access this resource');

    dto.userId = userId;

    const task = await this.prisma.task.create({ data: dto });

    return task;
  }

  async getAll(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new UnauthorizedException('Cannot access this resource');

    const tasks = await this.prisma.task.findMany({
      where: { userId: userId },
    });

    return tasks;
  }

  async getOne(userId: string, taskId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new UnauthorizedException('Cannot access this resource');

    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) throw new NotFoundException('Task not found');

    if (task.userId !== userId)
      throw new UnauthorizedException(
        'You are not allowed to edit this resource',
      );

    return task;
  }

  async edit(userId: string, taskId: string, dto: EditTaskDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new UnauthorizedException('Cannot access this resource');

    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) throw new NotFoundException('Task not found');

    if (task.userId !== userId)
      throw new UnauthorizedException(
        'You are not allowed to edit this resource',
      );

    const editedTask = await this.prisma.task.update({
      where: { id: taskId },
      data: { ...dto },
    });

    return editedTask;
  }

  async delete(userId: string, taskId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new UnauthorizedException('Cannot access this resource');

    const task = await this.prisma.task.findUnique({ where: { id: taskId } });

    if (!task) throw new NotFoundException('Task not found');

    if (task.userId !== userId)
      throw new UnauthorizedException(
        'You are not allowed to delete this resource',
      );

    const deletedTask = await this.prisma.task.delete({
      where: { id: taskId },
    });

    if (deletedTask) return { message: 'Task deleted successfully' };
  }
}
