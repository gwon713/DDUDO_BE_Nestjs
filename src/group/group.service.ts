import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupService {
  getHealth(): string {
    return 'group health';
  }

  groupList(): string {
    return 'group list';
  }

  groupDetail(): string {
    return 'group detail';
  }

  groupAdd(): string {
    return 'group add';
  }

  groupEditLiked(): string {
    return 'group edit liked';
  }

  groupEditStatus(): string {
    return 'group edit status';
  }

  groupEdit(): string {
    return 'group edit';
  }

  myGroup(): string {
    return 'get my group';
  }
}
