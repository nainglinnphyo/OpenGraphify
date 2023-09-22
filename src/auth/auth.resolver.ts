import { Args, Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from './model/user.model';

@Resolver(of => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Query(returns => User)
  async getUser(@Args('id') id: string): Promise<User> {

    return { id: id, name: "haha" };
  }

  @ResolveField('users', returns => [User])
  async getPosts(@Parent() user: User) {
    const { id } = user;
    return { id: id, name: "haha" };
  }
}
