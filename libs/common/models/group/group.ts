import { Field, ID, ObjectType } from '@nestjs/graphql';
import { DdudoGroupType } from '../../constant/group.type';

@ObjectType()
export class DdudoGroup {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  kind!: string;

  @Field(() => Boolean, { nullable: false })
  status!: boolean;

  @Field(() => Number, { nullable: true })
  liked?: number;

  @Field(() => String, { nullable: false })
  start_date!: string;

  @Field(() => String, { nullable: false })
  place!: string;

  @Field(() => String, { nullable: false })
  chat_link!: string;

  @Field(() => Number, { nullable: false })
  total_user!: number;

  @Field(() => Number, { nullable: false })
  join_user!: number;

  @Field(() => String, { nullable: false })
  about!: string;

  @Field(() => [String], { nullable: false })
  hashtag!: string[];

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => DdudoGroupType, { nullable: false })
  deleted!: DdudoGroupType;
}
