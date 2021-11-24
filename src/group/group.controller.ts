import { Controller, Get, Post, Put } from '@nestjs/common';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get('/health')
  healthCheck(): string {
    return this.groupService.getHealth();
  }

  @Get('/list')
  
  @Get('/detail')

  @Post('/add')

  @Put('/liked')

  @Put('/state/edit')

  @Put('/edit')

  @Get('/mylist')
}
