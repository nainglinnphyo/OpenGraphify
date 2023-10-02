import { Resolver, Query } from '@nestjs/graphql'
import { UserService } from './user.service'
import { ConfigService } from '@app/config/config.service'
import { User } from './model/user.model'

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Query(() => [User])
    async findAllUser(): Promise<User[]> {
        return this.userService.findAll();
    }
}
