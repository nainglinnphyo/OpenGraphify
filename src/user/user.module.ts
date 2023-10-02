import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { ConfigModule } from '@app/config/config.module'
import { PrismaService } from '@app/prisma.service'

@Module({
    imports: [ConfigModule],
    providers: [UserResolver, UserService, PrismaService],
})
export class UserModule { }
