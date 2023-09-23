import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Response {
    @Field(() => String)
    message!: string;
}
@InputType()
export class LoginUserInput {

    @Field(() => String)
    email!: string;

    @Field(() => String)
    password!: string;
}

@InputType()
export class RegisterUserInput {
    @Field(() => String)
    name!: string;

    @Field(() => String)
    email!: string;

    @Field(() => String)
    password!: string;
}

@ObjectType({ description: 'user register response' })
export class UserRegisterResponse extends Response {
    @Field(() => String)
    name!: string;

    @Field(() => String)
    email!: string;
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
    user: User | undefined;
    @Field(() => String)
    token!: string;
}

@ObjectType()
export class BlogResult {
    @Field(() => String)
    title!: String;
    @Field(() => String)
    content!: string;
    @Field(() => String)
    author!: string;
    @Field(() => Date)
    date!: Date;
}

