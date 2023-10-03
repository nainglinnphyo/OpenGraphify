import { UserService } from './user.service';
import { User } from './model/user.model';
import { CreateUserInput } from './dto/user-input.dto';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    findAllUser(): Promise<User[]>;
    findUserById(id: string): Promise<User>;
    createUser(createData: CreateUserInput): Promise<User>;
}
