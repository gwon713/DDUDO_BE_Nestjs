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
  getGroupList(): string {
    return this.groupService.groupList();
  }

  @Get('/detail')
  getGroupDetail(): string {
    return this.groupService.groupDetail();
  }

  @Post('/add')
  postAddGroup(): string {
    return this.groupService.groupAdd();
  }

  @Put('/liked/edit')
  putGroupLiked(): string {
    return this.groupService.groupEditLiked();
  }

  @Put('/status/edit')
  putGroupStatus(): string {
    return this.groupService.groupEditStatus();
  }

  @Put('/edit')
  putGroup(): string {
    return this.groupService.groupEdit();
  }

  @Get('/mylist')
  myGroup(): string {
    return this.groupService.myGroup();
  }
}
