import { Args, Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './interface/auth.interface';
import { LoginResult, LoginUserInput } from 'src/user/dto/user-input.dto';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Query(() => LoginResult)
  async userLogin(@Args('user') user: LoginUserInput): Promise<LoginResponse> {
    return this.authService.loginUser(user);
  }
}
