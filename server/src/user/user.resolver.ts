import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { UserService } from './user.service'
import { ConfigService } from '@app/config/config.service'
import { User } from './model/user.model'
import { CreateUserInput, UpdateUserInput } from './dto/user-input.dto';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    // find all users
    @Query(() => [User])
    async findAllUser(): Promise<User[]> {
        return this.userService.findAll();
    }

    // find user by id
    @Query(() => User)
    async findUserById(@Args('id') id: string): Promise<User> {
        return this.userService.findUserById(id);
    }

    // create  user
    @Mutation(() => User)
    async createUser(@Args('createData') createData: CreateUserInput): Promise<User> {
        return this.userService.createUser(createData)
    }

    // update user
    @Mutation(() => User)
    async updateUser(@Args('updateData') updateUser: UpdateUserInput): Promise<User> {
        return this.userService.updateUser(updateUser)
    }

    // find user by id
    @Query(() => User)
    async deleteUser(@Args('id') id: string): Promise<User> {
        return this.userService.deleteUser(id);
    }
}
