import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { DdudoUser } from 'libs/common/models/user';
import { UserService } from './user.service';

@Resolver((of) => DdudoUser)
export class userResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => DdudoUser)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getHealth();
  }

  @ResolveField()
  async posts(@Parent() user: DdudoUser) {
    const { email } = user;
    this.userService.userLogin(email);
    return this.userService.getHealth();
  }
}
