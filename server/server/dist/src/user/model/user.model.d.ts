import { GENDER } from "./enum";
export declare class Organization {
    id: string | undefined;
    name: string | undefined;
}
export declare class User {
    id: String | undefined;
    name: String | undefined;
    email: String | undefined;
    password?: String | undefined;
    isActive: boolean | undefined;
    gender?: keyof typeof GENDER;
    organizationId: String | undefined;
    lastUpdated: Date | undefined;
    organization: Organization;
}
