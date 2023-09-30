import { Resolver, Query } from '@nestjs/graphql'
import { UserService } from './user.service'
import { BlogResult } from './dto/user-input.dto'
import { ConfigService } from '@app/config/config.service'

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}
}
