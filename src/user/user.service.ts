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

  userNickName(): string {
    return 'user nickname';
  }

  userSignUp(): string {
    return 'user signup';
  }
}
