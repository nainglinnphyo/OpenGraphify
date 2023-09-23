import { BadRequestException, ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserInput, RegisterUserInput, UserRegisterResponse } from 'src/user/dto/user-input.dto';
import { LoginResponse } from './interface/auth.interface';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from 'src/config/config.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService, private jwtService: JwtService, private configService: ConfigService) { }

    async loginUser(user: LoginUserInput): Promise<LoginResponse> {
        const { email, password } = user;
        return this.prismaService.user.findFirstOrThrow({
            where: {
                email: email,
                isActive: true
            }
        })
            .then(async (user) => {
                if (!bcrypt.compare(password, user.password)) throw new UnauthorizedException('Could not log-in with the provided credentials');
                return {
                    user: user,
                    token: await this.generateToken({ id: user.id, password: user.password })
                };
            })
            .catch((e) => {
                throw new UnauthorizedException(
                    'Could not log-in with the provided credentials',
                );
            })
    }

    async registerUser(userInput: RegisterUserInput): Promise<UserRegisterResponse> {
        try {
            const { name, email, password } = userInput;
            const existingUser = await this.prismaService.user.findFirst({ where: { email } });

            if (existingUser) {
                throw new ConflictException('Email already in use');
            }
            // const password = this.generateRandomPassword(12)
            // console.log(password)
            return this.prismaService.user.create({
                data: {
                    email: email,
                    name,
                    password: await bcrypt.hash(password, 10),
                    isActive: false,
                    lastUpdated: new Date()
                }
            })
                .then((createUser) => {
                    return {
                        email: createUser.email,
                        name: createUser.name,
                        message: "User registered successfully. A confirmation email will be sent shortly."
                    }
                })
                .catch((e) => {
                    throw e
                })


        } catch (error) {
            if (error instanceof ConflictException) {
                throw new ConflictException('Email already in use');
            }
            throw new BadRequestException(error);
        }

    }

    async validateUser(email: string) {
        return this.prismaService.user.findFirst({ where: { email: email } })
    }



    // Create a JWT token
    async generateToken(user: { id: string, password: string }): Promise<string> {
        const payload = { sub: user.id, password: user.password };
        return this.jwtService.signAsync(payload, { secret: this.configService.jwtSecret, expiresIn: this.configService.jwtExpiresIn })
    }

    private generateRandomPassword(length: number): string {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let password = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset.charAt(randomIndex);
        }

        return password;
    }

}
