import { Field, ID, ObjectType } from '@nestjs/graphql';
import { DdudoUserSocialType, DdudoUserType } from '../constant/user.type';

@ObjectType()
export class DdudoUser {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  nickname!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => DdudoUserSocialType, { nullable: false })
  social!: DdudoUserSocialType;

  @Field(() => String, { nullable: true })
  file?: string;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  last_login_at!: Date;

  @Field(() => DdudoUserType, { nullable: false })
  deleted!: DdudoUserType;
}
