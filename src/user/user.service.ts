import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHealth(): string {
    return 'user health';
  }

  userLogin(): string {
    return 'user login';
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
