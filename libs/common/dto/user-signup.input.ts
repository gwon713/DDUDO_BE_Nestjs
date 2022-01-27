import { Field, InputType } from '@nestjs/graphql';
import { DdudoUserSocialType } from '../constant';

@InputType()
export class DdudoUserSignUpInput {
  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { nullable: false })
  nickName: string;

  @Field(() => String, { nullable: false })
  password: string;

  @Field(() => DdudoUserSocialType, { nullable: false })
  social: DdudoUserSocialType;

  @Field(() => String, { nullable: true })
  file?: string;
}
