import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class LoginUserInput {

    @Field(() => String)
    email?: string;

    @Field(() => String)
    password: string | undefined;
}

@ObjectType({ description: 'user model' })
export class User {
    @Field(type => ID)
    id!: string;

    @Field()
    name!: string;

    @Field(() => String)
    email?: string;

    @Field(() => String)
    password!: string;
}

@ObjectType()
export class LoginResult {
    @Field(() => User)
    user: User | undefined ;
    @Field(() => String)
    token!: string;
}