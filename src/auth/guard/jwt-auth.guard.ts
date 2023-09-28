import {
    Injectable,
    ExecutionContext,
    UnauthorizedException,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthenticationError } from 'apollo-server-core'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context)
        const request = ctx.getContext().req
        return request
    }

    handleRequest(err: any, user: any, info: any) {
        if (err || !user) {
            throw (
                err ||
                new UnauthorizedException('Could not authenticate with token')
            )
        }
        return user
    }
}
