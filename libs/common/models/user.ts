import { Field, ID, ObjectType } from '@nestjs/graphql';
import { DdudoUserSocialType, DdudoUserType } from '../constant/user.type';

@ObjectType()
export class DdudoUser {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  nickName!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => DdudoUserSocialType, { nullable: false })
  social!: DdudoUserSocialType;

  @Field(() => String, { nullable: true })
  file?: string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  lastLoginAt!: Date;

  @Field(() => DdudoUserType, { nullable: false })
  state!: DdudoUserType;
}
