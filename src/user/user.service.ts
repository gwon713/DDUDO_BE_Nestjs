import { Injectable } from '@nestjs/common';
import { DdudoUser } from 'libs/common/models/user';

@Injectable()
export class UserService {
  getHealth(): string {
    return 'user health';
  }

  async userLogin(): Promise<DdudoUser> {
    return;
  }

  userLogOut(): string {
    return 'user logout';
  }

  userGetNickName(): string {
    return 'user get nickname';
  }

  userSignUp(): string {
    return 'user signup';
  }

  userGetProfile(): string {
    return 'user get profile';
  }

  userEditProfile(): string {
    return 'user edit profile';
  }
}
