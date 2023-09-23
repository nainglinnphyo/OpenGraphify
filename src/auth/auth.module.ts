import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from 'src/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from 'src/config/config.module';
import { User } from 'src/user/dto/user-input.dto';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { EmailService } from '@app/email/email.service';

@Module({
  imports: [
    forwardRef(() => User),
    PassportModule,
    JwtModule.register({
      secret: 'SECRET',
      signOptions: {
        expiresIn: '60s',
      },
    }),
    ConfigModule,
  ],
  providers: [AuthResolver, AuthService, PrismaService, JwtService, JwtStrategy, EmailService],
})
export class AuthModule { }
