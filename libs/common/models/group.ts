import { Field, ID, ObjectType } from '@nestjs/graphql';
import { DdudoGroupType } from '../constant';

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
  startDate!: string;

  @Field(() => String, { nullable: false })
  place!: string;

  @Field(() => String, { nullable: false })
  chatLink!: string;

  @Field(() => Number, { nullable: false })
  totalUser!: number;

  @Field(() => Number, { nullable: false })
  joinUser!: number;

  @Field(() => String, { nullable: false })
  about!: string;

  @Field(() => [String], { nullable: false })
  hashtag!: string[];

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => DdudoGroupType, { nullable: false })
  type!: DdudoGroupType;
}
