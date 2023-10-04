import { PrismaService } from '@app/prisma/prisma.service';
import { BadRequestException, ConflictException, Injectable } from '@nestjs/common'
import { User } from './model/user.model';
import { CreateUserInput, UpdateUserInput } from './dto/user-input.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) { }

    // find all users
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

    async findUserById(id: string): Promise<User> {
        return this.prismaService.user.findUniqueOrThrow({
            where: {
                id: id
            },
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
            .then((user) => {
                return user
            })
            .catch((err) => {
                throw new BadRequestException(err.message)
            })
    }

    // create  user
    async createUser(dto: CreateUserInput): Promise<User> {
        return this.prismaService.user.create({
            data: {
                email: dto.email,
                name: dto.name,
                organization: {
                    connectOrCreate: {
                        create: {
                            name: dto.organization.name
                        },
                        where: {
                            name: dto.organization.name
                        }
                    }
                },
                
                gender: dto.gender
            },
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
            .then((data) => {
                return data
            })
            .catch((error) => {
                if (error?.code === "P2002") throw new ConflictException("User already exists")
                throw new BadRequestException("Something went wrong")
            })
    }

    // update  user
    async updateUser(dto: UpdateUserInput): Promise<User> {
        return this.prismaService.user.update({
            where: {
                id: dto.id
            },
            data: {
                email: dto.email,
                name: dto.name,
                organization: {
                    upsert: {
                        where: {
                            name: dto.organization.name
                        },
                        create: {
                            name: dto.organization.name
                        },
                        update: {
                            name: dto.organization.name
                        }
                    }
                },
                gender: dto.gender
            },
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
            .then((data) => {
                return data
            })
            .catch((error) => {
                if (error?.code === "P2002") throw new ConflictException("User already exists")
                throw new BadRequestException("Something went wrong")
            })
    }

    // delete  user
    async deleteUser(id: string): Promise<User> {
        return this.prismaService.user.delete({
            where: {
                id: id
            },
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
            .then((data) => {
                return data
            })
            .catch((err) => {
                throw new NotFoundException("User not found")
            })
    }
}
