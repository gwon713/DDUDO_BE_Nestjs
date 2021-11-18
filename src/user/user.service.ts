import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHealth(): string {
    return 'user health';
  }
}
