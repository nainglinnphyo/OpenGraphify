import { registerEnumType } from '@nestjs/graphql';

export enum GENDER {
    FEMALE = "FEMALE",
    MALE = "MALE"
}


registerEnumType(GENDER, { name: 'GENDER', description: undefined })
