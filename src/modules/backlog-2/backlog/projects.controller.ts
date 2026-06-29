import { Controller, Get, Delete, Param } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';
import { ProjectResponseDto } from './dto';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiResponse({ type: [ProjectResponseDto] })
  async listProjects(): Promise<ProjectResponseDto[]> {
    return this.projectsService.findAll();
  }

  @Delete(':id')
  @ApiResponse({ status: 204 })
  async deleteProject(@Param('id') id: string): Promise<void> {
    return this.projectsService.delete(id);
  }
}
