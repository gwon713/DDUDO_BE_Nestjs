import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupService {
  getHealth(): string {
    return 'group health';
  }
}
