import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from '../auth.service';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly _authService: AuthService,
        private configService: ConfigService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.jwtSecret,
            ignoreExpiration: false,
        });
    }

    async validate(payload: { sub: string, email: string, iat: number, exp: number }) {
        const user = await this._authService.validateUser(payload.email);
        if (!user) {
            throw new UnauthorizedException(
                'Could not log-in with the provided credentials',
            );
        }
        return user;
    }
}