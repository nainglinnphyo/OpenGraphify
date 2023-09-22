import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { generateFakePost } from 'src/helpers/blog';
import { BlogResult } from './dto/user-input.dto';


@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Query(() => BlogResult)
  async getBlog() {
    return generateFakePost()
  }
}
