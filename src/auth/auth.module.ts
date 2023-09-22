import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from 'src/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from 'src/config/config.module';
import { User } from 'src/user/dto/user-input.dto';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    forwardRef(() => User),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'SECRET',
      signOptions: {
        expiresIn: '60s',
      },
    }),
    ConfigModule,
  ],
  providers: [AuthResolver, AuthService, PrismaService, JwtService],
})
export class AuthModule { }