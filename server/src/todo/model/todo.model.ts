import { User } from "@app/user/model/user.model";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "Todo Model" })
export class TodoModel {

    @Field(type => ID)
    id: string | undefined;

    @Field(() => String)
    task: string | undefined

    @Field(() => Boolean)
    isComplete: boolean | undefined

    @Field(() => String)
    userId: String | undefined

    @Field(() => User)
    user: User

}
