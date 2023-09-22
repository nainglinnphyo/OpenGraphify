import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LoginUserInput {

    @Field(() => String)
    email?: string;

    @Field(() => String)
    password: string;
}