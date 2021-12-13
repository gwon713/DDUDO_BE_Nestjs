import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DdudoCode {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  etc!: string;

  @Field(() => Boolean, { nullable: false })
  use_at!: boolean;
}
