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
  @ApiOperation({
    summary: 'USER APP Get NickName',
    description: 'USER APP 닉네임 가져오가 API',
  })
  @ApiCreatedResponse({ description: '' })
  getUserNickName(): string {
    return this.userService.userGetNickName();
  }

  @Post('/signup')
  @ApiOperation({
    summary: 'USER APP Sign Up',
    description: 'USER APP 회원가입 API',
  })
  @ApiCreatedResponse({ description: '' })
  postUserSignUp(): string {
    return this.userService.userSignUp();
  }

  @Get('/profile')
  @ApiOperation({
    summary: 'USER APP Get Profile',
    description: 'USER APP 프로필 가져오기 API',
  })
  @ApiCreatedResponse({ description: '' })
  getUserProfile(): string {
    return this.userService.userGetProfile();
  }

  @Put('/profile/edit')
  @ApiOperation({
    summary: 'USER APP Edit Profile',
    description: 'USER APP 프로필 수정 API',
  })
  @ApiCreatedResponse({ description: '' })
  putUserProfile(): string {
    return this.userService.userEditProfile();
  }
}
