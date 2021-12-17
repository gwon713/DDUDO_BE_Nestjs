import { Injectable } from '@nestjs/common';
import { DdudoGroupEntity } from '../../libs/database/entities/group.entity';
import { DdudoGroupRepository } from '../../libs/database/repositories/group.repository';

@Injectable()
export class GroupService {
  constructor(private readonly groupRepository: DdudoGroupRepository) {}
  getHealth(): string {
    return 'group health';
  }

  async groupList(): Promise<DdudoGroupEntity[]> {
    return this.groupRepository.find();
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
