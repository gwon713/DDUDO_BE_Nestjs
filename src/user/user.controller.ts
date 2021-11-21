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
  userLogin(): string{
      return this.userService.userLogin();
  }

  @Post('/logout')

  @Get('/nickname')

  @Post('/signup')
}
