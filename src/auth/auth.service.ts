import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginUserInput } from 'src/user/dto/user-input.dto';
import { LoginResponse } from './interface/auth.interface';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService, private jwtService: JwtService, private configService: ConfigService) { }

    async loginUser(user: LoginUserInput): Promise<LoginResponse> {
        const { email, password } = user;
        return this.prismaService.user.findFirstOrThrow({
            where: {
                email: email,
                password: password
            }
        })
            .then(async (user) => {
                return {
                    user: user,
                    token: await this.generateToken({ id: user.id, password: user.password })
                };
            })
            .catch((e) => {
                throw new BadRequestException(
                    'Could not log-in with the provided credentials',
                );
            })
    }

    async validateUser(email: string) {
        return this.prismaService.user.findFirst({ where: { email: email }, select: { id: true, email: true } })
    }

    // Create a JWT token
    async generateToken(user: { id: string, password: string }): Promise<string> {
        const payload = { sub: user.id, password: user.password };
        return this.jwtService.signAsync(payload, { secret: this.configService.jwtSecret, expiresIn: this.configService.jwtExpiresIn })
    }

}
