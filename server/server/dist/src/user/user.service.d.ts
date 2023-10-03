import { PrismaService } from '@app/prisma.service';
import { User } from './model/user.model';
import { CreateUserInput } from './dto/user-input.dto';
export declare class UserService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<User[]>;
    findUserById(id: string): Promise<User>;
    createUser(dto: CreateUserInput): Promise<User>;
}
