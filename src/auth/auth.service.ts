import { Injectable } from '@nestjs/common';
import { DdudoUser } from 'libs/common/models/user';
import { DdudoUserEntity } from 'libs/database/entities';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async validateUser(
    email: string,
    password: string,
  ): Promise<DdudoUserEntity> {
    const user = await this.userService.userLogin(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
