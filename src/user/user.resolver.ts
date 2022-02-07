import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { DdudoUserSignUpInput } from 'libs/common/dto';
import { DdudoUser } from 'libs/common/models/user';
import { UserService } from './user.service';

@Resolver((of) => DdudoUser)
export class userResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => DdudoUser)
  async user(
    @Args({
      name: 'input',
      description: '회원가입 정보 입력',
      type: () => DdudoUserSignUpInput,
    })
    input: DdudoUserSignUpInput,
  ) {
    return this.userService.getHealth();
  }

  @ResolveField()
  async posts(@Parent() user: DdudoUser) {
    this.userService.userLogin(user.email);
    return this.userService.getHealth();
  }
}
