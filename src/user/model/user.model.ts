import { Field, ID, ObjectType } from "@nestjs/graphql";

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

    @Field(() => String)
    organizationId: String | undefined

    @Field(() => Date)
    lastUpdated: Date | undefined

    @Field(() => Organization)
    organization: Organization | undefined

    // @Field(() => Date)
    // createdAt: Date | undefined

    // @Field(() => Date)
    // updatedAt: Date | undefined
}

@ObjectType({ description: "User Model" })
export class Organization {

    @Field(type => ID)
    id: String | undefined;

    @Field(() => String)
    name: String | undefined

    // @Field(() => Date)
    // createdAt: Date | undefined

    // @Field(() => Date)
    // updatedAt: Date | undefined
}