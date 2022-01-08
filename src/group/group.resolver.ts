import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GroupService } from './group.service';
import { DdudoGroup } from 'libs/common/models/group';

@Resolver((of) => DdudoGroup)
export class groupResolver {
  constructor(private groupService: GroupService) {}

  @Query((returns) => DdudoGroup)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.groupService.getHealth();
  }

  @ResolveField()
  async posts(@Parent() group: DdudoGroup) {
    const { id } = group;
    return this.groupService.getHealth();
  }
}
