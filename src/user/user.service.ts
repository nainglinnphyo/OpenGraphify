import { PrismaService } from '@app/prisma.service';
import { Injectable } from '@nestjs/common'
import { User } from './model/user.model';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) { }

    async findAll(): Promise<User[]> {
        return this.prismaService.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                isActive: true,
                gender: true,
                lastUpdated: true,
                organizationId: true,
                organization: {
                    select: {
                        id: true,
                        name: true
                    }
                },
            }
        })
    }
}
