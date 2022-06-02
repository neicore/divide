import { Module } from '@nestjs/common';
import { SubtaskController } from './subtask.controller';
import { SubtaskService } from './subtask.service';

@Module({
  controllers: [SubtaskController],
  providers: [SubtaskService],
})
export class SubtaskModule {}
