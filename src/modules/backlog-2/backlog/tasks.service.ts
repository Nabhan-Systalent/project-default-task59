import { Injectable } from '@nestjs/common';
import { CreateTaskDto, TaskResponseDto } from './dto';

@Injectable()
export class TasksService {
  private tasks: TaskResponseDto[] = [];

  async findAll(): Promise<TaskResponseDto[]> {
    return this.tasks;
  }

  async create(dto: CreateTaskDto): Promise<TaskResponseDto> {
    const task = { id: Math.random().toString(36).substring(7), ...dto };
    this.tasks.push(task);
    return task;
  }
}
