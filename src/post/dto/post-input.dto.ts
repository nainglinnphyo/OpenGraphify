import { Field, ObjectType, ID } from "@nestjs/graphql";


@ObjectType({ description: 'Post model' })
export class PostModel {
    @Field(type => ID)
    id!: string;

    @Field()
    title!: string;

    @Field(() => String)
    content?: string;

}

@ObjectType()
export class PostResult {
    @Field(type => ID)
    id!: string;

    @Field()
    title!: string;

}