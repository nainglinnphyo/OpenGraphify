import { MiddlewareConsumer, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LoggerMiddleware } from './middleware/logger.middleware'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { ConfigModule } from './config/config.module'
import { UserModule } from './user/user.module'
import { EmailModule } from './email/email.module'
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';
import { RedirectMiddleware } from './middleware/redirect.middleware'

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: true,
            path: "/graphql"
        }),
        EmailModule,
        ConfigModule,
        UserModule,
        TodoModule,
        PrismaModule,
        PostModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
        // consumer.apply(RedirectMiddleware).forRoutes('*');
    }
}
