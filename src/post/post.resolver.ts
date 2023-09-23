import { Resolver, Query, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { PostModel, PostResult } from './dto/post-input.dto';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CurrentUser } from 'src/decorators/get-user.decorator';
import { User } from 'src/user/dto/user-input.dto';

const posts = [
  { id: '12', title: 'post', content: 'post' },
  { id: '13', title: 'post', content: 'post' }
]

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) { }

  @UseGuards(JwtAuthGuard)
  @Query(() => [PostResult])
  async getAllPost(@CurrentUser() user: User): Promise<PostResult[]> {
    console.log(user)
    return posts
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => PostModel)
  async getOnePost(@Args('id') id: string): Promise<PostModel | undefined> {
    const post = posts.find((post) => post.id === id)
    if (post) return post
    throw new NotFoundException("Post not found")
  }
}
