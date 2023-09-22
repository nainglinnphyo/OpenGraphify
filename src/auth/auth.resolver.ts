import { Args, Resolver, Query, ResolveField, Parent, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './interface/auth.interface';
import { LoginResult, LoginUserInput, User } from 'src/user/dto/user-input.dto';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/decorators/get-user.decorator';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Query(() => LoginResult)
  async userLogin(@Args('user') user: LoginUserInput): Promise<LoginResponse> {
    return this.authService.loginUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => String)
  async refreshToken(@Context('req') request: any): Promise<string> {
    const user: User = request.user;
    // console.log(user)
    if (!user)
      throw new UnauthorizedException(
        'Could not log-in with the provided credentials',
      );
    const result = await this.authService.generateToken({ id: user.id, password: user.password });
    if (result) return result;
    throw new UnauthorizedException(
      'Could not log-in with the provided credentials',
    );
  }

  // @UseGuards(JwtAuthGuard)
  // @Query(() => { })
  // async me(@CurrentUser() user: User) {
  //   return user;
  // }

}
