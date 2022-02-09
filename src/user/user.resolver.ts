import {
  Args,
  Int,
  Mutation,
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

  @Mutation((returns) => DdudoUser)
  async userSignUp(
    @Args({
      name: 'input',
      description: '회원가입 정보 입력',
      type: () => DdudoUserSignUpInput,
    })
    input: DdudoUserSignUpInput,
  ) {
    this.userService.userSignUp(input);
    return this.userService.getHealth();
  }

  @Mutation((returns) => DdudoUser)
  async userLogin(
    @Args({
      name: 'input',
      description: '회원가입 정보 입력',
      type: () => DdudoUserSignUpInput,
    })
    input: DdudoUserSignUpInput,
  ) {
    this.userService.userLogin(input.email);
    return this.userService.getHealth();
  }
}
