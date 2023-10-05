import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post, PostWithComment, Comment } from './model/post.model';
import { CreateCommentInput, CreatePostInput, UpdatePostInput } from './dto/post-input.dto';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) { }

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Query(() => PostWithComment)
  async postWithComment(@Args('postId') postId: string): Promise<PostWithComment> {
    return this.postService.postWithComment(postId);
  }

  @Mutation(() => Post)
  async createPost(@Args('dto') dto: CreatePostInput): Promise<Post> {
    return this.postService.create(dto);
  }

  @Mutation(() => Comment)
  async createComment(@Args('dto') dto: CreateCommentInput): Promise<Comment> {
    return this.postService.createComment(dto);
  }

  @Mutation(() => Post)
  async updatePost(@Args('dto') dto: UpdatePostInput): Promise<Comment> {
    return this.postService.edit(dto);
  }

}
