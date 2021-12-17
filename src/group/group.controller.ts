import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get('/health')
  @ApiOperation({
    summary: 'GROUP APP Health Check',
    description: 'GROUP APP 상태확인 API',
  })
  @ApiCreatedResponse({ description: '' })
  healthCheck(): string {
    return this.groupService.getHealth();
  }

  @Get('/list')
  @ApiOperation({
    summary: 'GROUP APP Group List',
    description: 'GROUP APP 그룹리스트 API',
  })
  @ApiCreatedResponse({ description: '' })
  async getGroupList(): Promise<any> {
    return await this.groupService.groupList();
  }

  @Get('/detail')
  @ApiOperation({
    summary: 'GROUP APP Get Group Detail',
    description: 'GROUP APP 그룹 상세 정보 확인 API',
  })
  @ApiCreatedResponse({ description: '' })
  getGroupDetail(): string {
    return this.groupService.groupDetail();
  }

  @Post('/add')
  @ApiOperation({
    summary: 'GROUP APP GROUP ADD Check',
    description: 'GROUP APP 그룹 추가 API',
  })
  @ApiCreatedResponse({ description: '' })
  postAddGroup(): string {
    return this.groupService.groupAdd();
  }

  @Put('/liked')
  @ApiOperation({
    summary: 'GROUP APP Group Liked',
    description: 'GROUP APP 그룹 좋아요 표시 API',
  })
  @ApiCreatedResponse({ description: '' })
  putGroupLiked(): string {
    return this.groupService.groupEditLiked();
  }

  @Put('/status/edit')
  @ApiOperation({
    summary: 'GROUP APP Group Status Change',
    description: 'GROUP APP 그룹 상태 변경 API',
  })
  @ApiCreatedResponse({ description: '' })
  putGroupStatus(): string {
    return this.groupService.groupEditStatus();
  }

  @Put('/edit')
  @ApiOperation({
    summary: 'GROUP APP Group Edit',
    description: 'GROUP APP 그룹 정보 수정 API',
  })
  @ApiCreatedResponse({ description: '' })
  putGroup(): string {
    return this.groupService.groupEdit();
  }

  @Get('/mylist')
  @ApiOperation({
    summary: 'GROUP APP My Group List',
    description: 'GROUP APP 내 그룹 리스트 API',
  })
  @ApiCreatedResponse({ description: '' })
  myGroup(): string {
    return this.groupService.myGroup();
  }
}
