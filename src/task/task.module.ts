import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.sevice';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [PrismaModule]
})
export class TaskModule {}
