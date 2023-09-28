import {
    Args,
    Resolver,
    Query,
    ResolveField,
    Parent,
    Context,
} from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { LoginResponse } from './interface/auth.interface'
import {
    LoginResult,
    LoginUserInput,
    RegisterUserInput,
    User,
    UserRegisterResponse,
} from 'src/user/dto/user-input.dto'
import { UnauthorizedException, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from './guard/jwt-auth.guard'
import { CurrentUser } from '@app/decorators/get-auth-user.decorator'

@Resolver('Auth')
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Query(() => LoginResult)
    async userLogin(
        @Args('user') user: LoginUserInput
    ): Promise<LoginResponse> {
        return this.authService.loginUser(user)
    }

    @Query(() => UserRegisterResponse)
    async userRegister(
        @Args('user') user: RegisterUserInput
    ): Promise<UserRegisterResponse> {
        return this.authService.registerUser(user)
    }

    @UseGuards(JwtAuthGuard)
    @Query(() => String)
    async refreshToken(@Context('req') request: any): Promise<string> {
        const user: User = request.user
        if (!user)
            throw new UnauthorizedException(
                'Could not log-in with the provided credentials'
            )
        const result = await this.authService.generateToken({
            id: user.id,
            password: user.password,
        })
        if (result) return result
        throw new UnauthorizedException(
            'Could not log-in with the provided credentials'
        )
    }

    @UseGuards(JwtAuthGuard)
    @Query(() => User)
    async me(@CurrentUser() user: User) {
        return user
    }
}
