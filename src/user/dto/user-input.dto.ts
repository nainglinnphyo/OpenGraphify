import { Field, ID, InputType, registerEnumType } from "@nestjs/graphql";
import { GENDER } from "../model/enum";


@InputType()
export class CreateOrganizationInput {

    @Field(() => String)
    name: string | undefined
}

@InputType()
export class CreateUserInput {

    @Field(() => String)
    name: string | undefined

    @Field(() => String)
    email: string | undefined

    @Field(() => GENDER, { nullable: true })
    gender?: keyof typeof GENDER;

    @Field(() => CreateOrganizationInput)
    organization: CreateOrganizationInput
}

