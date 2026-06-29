import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto, TaskResponseDto } from './dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiResponse({ type: [TaskResponseDto] })
  async listTasks(): Promise<TaskResponseDto[]> {
    return this.tasksService.findAll();
  }

  @Post()
  @ApiResponse({ type: TaskResponseDto })
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskResponseDto> {
    return this.tasksService.create(createTaskDto);
  }
}
