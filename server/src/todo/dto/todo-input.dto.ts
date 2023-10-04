import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateTodoInput {

    @Field(() => String)
    task: string | undefined

    @Field(() => Boolean, { nullable: true })
    isComplete?: boolean | undefined

    @Field(() => String)
    userId: string | undefined

}

@InputType()
export class CompleteTask {

    @Field(() => String)
    id: string | undefined

}