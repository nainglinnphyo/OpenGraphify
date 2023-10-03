import { PrismaService } from '@app/prisma.service';
import { User } from './model/user.model';
import { CreateUserInput, UpdateUserInput } from './dto/user-input.dto';
export declare class UserService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<User[]>;
    findUserById(id: string): Promise<User>;
    createUser(dto: CreateUserInput): Promise<User>;
    updateUser(dto: UpdateUserInput): Promise<User>;
    deleteUser(id: string): Promise<User>;
}
