import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { GENDER } from "./enum";

@ObjectType({ description: "User Model" })
export class Organization {

    @Field(type => ID)
    id: string | undefined;

    @Field(() => String)
    name: string | undefined
}

@ObjectType({ description: "User Model" })
export class User {
    @Field(type => ID)
    id: String | undefined;

    @Field(() => String)
    name: String | undefined

    @Field(() => String)
    email: String | undefined

    @Field(() => String)
    password?: String | undefined

    @Field(() => Boolean)
    isActive: boolean | undefined

    @Field(() => GENDER, { nullable: true })
    gender?: keyof typeof GENDER;

    @Field(() => String)
    organizationId: String | undefined

    @Field(() => Date)
    lastUpdated: Date | undefined

    @Field(() => Organization)
    organization: Organization
}