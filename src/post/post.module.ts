import { Module, forwardRef } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';

@Module({
  imports: [
    // forwardRef(() => PostModel),
  ],
  providers: [PostResolver, PostService],
})
export class PostModule {}
