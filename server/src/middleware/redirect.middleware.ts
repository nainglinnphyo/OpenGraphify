import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RedirectMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        // Define the route that should not be redirected
        const graphqlRoute = '/graphql';

        // Check if the requested route is the exempted route
        if (req.url === graphqlRoute) {
            next();
        } else {
            res.redirect('https://opengraphify.vercel.app');
        }
    }
}
