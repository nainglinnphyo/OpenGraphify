import { GENDER } from "../model/enum";
export declare class CreateOrganizationInput {
    name: string | undefined;
}
export declare class CreateUserInput {
    name: string | undefined;
    email: string | undefined;
    gender?: keyof typeof GENDER;
    organization: CreateOrganizationInput;
}
export declare class UpdateUserInput {
    id: string | undefined;
    name: string | undefined;
    email: string | undefined;
    gender?: keyof typeof GENDER;
    organization: CreateOrganizationInput;
}
