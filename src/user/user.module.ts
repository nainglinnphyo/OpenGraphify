import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { ConfigModule } from '@app/config/config.module'

@Module({
    imports: [ConfigModule],
    providers: [UserResolver, UserService],
})
export class UserModule {}
