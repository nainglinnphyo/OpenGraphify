import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
    @Field(() => String)
    title: string;

    @Field(() => String)
    body: string;

    @Field(() => String)
    userId: string | undefined
}

@InputType()
export class UpdatePostInput {
    @Field(() => String)
    title: string;

    @Field(() => String)
    body: string;

    @Field(() => String)
    postId: string;
}

@InputType()
export class CreateCommentInput {
    @Field(() => String)
    postId: string | undefined

    @Field(() => String)
    body: string;

    @Field(() => String)
    userId: string | undefined
}