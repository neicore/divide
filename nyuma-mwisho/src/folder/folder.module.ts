import { Module } from '@nestjs/common';
import { FolderController } from './folder.controller';
import { FolderService } from './folder.service';

@Module({
  controllers: [FolderController],
  providers: [FolderService]
})
export class FolderModule {}
