import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DdudoGroupLike {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => String, { nullable: false })
  groupId!: string;
}
