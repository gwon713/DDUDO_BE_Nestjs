import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DdudoCodeDetail {
  @Field(() => ID, { nullable: false })
  code_id!: string;

  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  etc!: string;

  @Field(() => Boolean, { nullable: false })
  use_at!: boolean;
}
