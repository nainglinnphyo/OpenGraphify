import { Module } from '@nestjs/common'
import { ConfigModule } from '@app/config/config.module'
import { EmailService } from './email.service'
import { ConfigService } from '@app/config/config.service'

@Module({
    imports: [ConfigModule],
    providers: [EmailService],
})
export class EmailModule {}
