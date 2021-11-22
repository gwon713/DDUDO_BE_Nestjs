import { Controller, Get, Post } from '@nestjs/common';
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
    return this.userService.userNickName();
  }

  @Post('/signup')
  postUserSignUp(): string {
    return this.userService.userSignUp();
  }
}
