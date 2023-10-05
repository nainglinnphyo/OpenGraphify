import { User } from '@app/user/model/user.model';
import { ObjectType, Field, Int, ID, PartialType } from '@nestjs/graphql';


@ObjectType({ description: "User In Post" })
export class UserInPost {
  @Field(type => ID)
  id: String | undefined;

  @Field(() => String)
  name: String | undefined
}

@ObjectType()
export class Comment {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  body: string;

  @Field(() => String)
  userId: String | undefined

  @Field(() => UserInPost)
  user: UserInPost
}


@ObjectType()
export class Post {

  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  body: string;

  @Field(() => String)
  userId: String | undefined

  @Field(() => UserInPost)
  user: UserInPost
}

@ObjectType()
export class PostWithComment extends PartialType(Post) {
  @Field(() => [Comment])
  comment: Comment[]
}





