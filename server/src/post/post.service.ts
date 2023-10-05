import { PrismaService } from '@app/prisma/prisma.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Post, PostWithComment, Comment } from './model/post.model';
import { CreateCommentInput, CreatePostInput, UpdatePostInput } from './dto/post-input.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) { }

  async findAll(): Promise<Post[]> {
    return this.prismaService.post.findMany({
      select: {
        id: true,
        title: true,
        body: true,
        userId: true,
        user: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    })
  }

  async postWithComment(postId: string): Promise<PostWithComment> {
    return this.prismaService.post.findUniqueOrThrow({
      where: {
        id: postId
      },
      select: {
        id: true,
        title: true,
        body: true,
        userId: true,
        user: {
          select: {
            id: true,
            name: true,
          }
        },
        comment: {
          select: {
            id: true,
            body: true,
            userId: true,
            user: {
              select: {
                id: true,
                name: true,
              }
            }
          }
        }
      }
    })
      .then(data => data)
      .catch((err) => {
        throw new NotFoundException("Post with id " + postId + "not found")
      })
  }

  async create(dto: CreatePostInput): Promise<Post> {
    return this.prismaService.post.create({
      data: dto,
      select: {
        id: true,
        title: true,
        body: true,
        userId: true,
        user: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    })
      .then(post => post)
      .catch((err) => {
        if (err instanceof PrismaClientKnownRequestError) {
          throw new BadRequestException(err.message)
        }
        throw new BadRequestException(err.message)
      })
  }

  async edit(dto: UpdatePostInput): Promise<Post> {
    return this.prismaService.post.update({
      where:{
        id:dto.postId
      },
      data: {
        body: dto.body,
        title: dto.title
      },
      select: {
        id: true,
        title: true,
        body: true,
        userId: true,
        user: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    })
      .then(post => post)
      .catch((err) => {
        if (err instanceof PrismaClientKnownRequestError) {
          throw new BadRequestException(err.message)
        }
        throw new BadRequestException(err.message)
      })
  }

  async createComment(dto: CreateCommentInput): Promise<Comment> {
    return this.prismaService.comment.create({
      data: dto,
      select: {
        id: true,
        body: true,
        userId: true,
        user: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })
      .then(comment => comment)
      .catch((err) => {
        if (err instanceof PrismaClientKnownRequestError) {
          throw new BadRequestException(err.message)
        }
        throw new BadRequestException(err.message)
      })
  }
}
