import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHealth(): string {
    return 'user health';
  }

  userLogin(): string {
    return 'user login';
  }
}
