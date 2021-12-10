import { Field, ID, ObjectType } from '@nestjs/graphql';
import { userSocialType } from 'libs/database/entities/user.entity';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  nickname!: string;

  @Field(() => String, { nullable: false })
  token!: string;

  @Field(() => userSocialType, { nullable: false })
  social!: userSocialType;

  @Field(() => String, { nullable: true })
  file?: string;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  last_login_at!: Date;

  @Field(() => Boolean, { nullable: false })
  deleted!: boolean;
}
