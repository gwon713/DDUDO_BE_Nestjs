import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/health')
  @ApiOperation({
    summary: 'USER APP Health Check',
    description: 'USER APP 상태확인 API',
  })
  @ApiCreatedResponse({ description: 'Healthy.' })
  healthCheck(): string {
    return this.userService.getHealth();
  }

  @Post('/login')
  @ApiOperation({
    summary: 'USER APP Login',
    description: 'USER APP 로그인 API',
  })
  @ApiCreatedResponse({ description: '' })
  postUserLogin(): string {
    return this.userService.userLogin();
  }

  @Post('/logout')
  @ApiOperation({
    summary: 'USER APP Log Out',
    description: 'USER APP 로그아웃 API',
  })
  @ApiCreatedResponse({ description: '' })
  postUserLogOut(): string {
    return this.userService.userLogOut();
  }

  @Get('/nickname')
  getUserNickName(): string {
    return this.userService.userGetNickName();
  }

  @Post('/signup')
  postUserSignUp(): string {
    return this.userService.userSignUp();
  }

  @Get('/profile')
  getUserProfile(): string {
    return this.userService.userGetProfile();
  }

  @Put('/profile/edit')
  putUserProfile(): string {
    return this.userService.userEditProfile();
  }
}
