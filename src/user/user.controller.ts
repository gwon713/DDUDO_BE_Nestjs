import { Controller, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/health')
  healthCheck(): string {
    return this.userService.getHealth();
  }

  @Post('/login')
  postUserLogin(): string {
    return this.userService.userLogin();
  }

  @Post('/logout')
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
