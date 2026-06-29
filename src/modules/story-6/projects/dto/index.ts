import { ApiProperty } from '@nestjs/swagger';

export class ProjectDto {
  @ApiProperty({ example: 'uuid-123' })
  id: string;

  @ApiProperty({ example: 'Website Redesign' })
  name: string;
}
