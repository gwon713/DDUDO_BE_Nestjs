import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DdudoUserSignUpInput {
  @Field(() => String, { nullable: false })
  email: string;
}
