import { PrismaService } from '@app/prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { TodoModel } from './model/todo.model';
import { CreateTodoInput } from './dto/todo-input.dto';

@Injectable()
export class TodoService {

    constructor(private prismaService: PrismaService) { }

    async findAllTodo(): Promise<TodoModel[]> {
        return this.prismaService.todo.findMany({
            select: {
                id: true,
                task: true,
                isComplete: true,
                userId: true,
                user: {
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
                }

            }
        })
    }

    async findAllTodoByUserId(userId: string): Promise<TodoModel[]> {
        return this.prismaService.todo.findMany({
            where: {
                userId: userId
            },
            select: {
                id: true,
                task: true,
                isComplete: true,
                userId: true,
                user: {
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
                }

            }
        })
    }

    async findAllTodoById(id: string): Promise<TodoModel> {
        return this.prismaService.todo.findUniqueOrThrow({
            where: {
                id: id
            },
            select: {
                id: true,
                task: true,
                isComplete: true,
                userId: true,
                user: {
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
                }

            }
        })
            .then((todo) => todo)
            .catch((error) => {
                throw new BadRequestException("Not Found")
            })
    }

    async createTodo(dto: CreateTodoInput): Promise<TodoModel> {
        return this.prismaService.todo.create({
            data: dto,
            select: {
                id: true,
                task: true,
                isComplete: true,
                userId: true,
                user: {
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
                }

            }
        })
            .then((todo) => todo)
            .catch((error) => {
                throw new BadRequestException(error.message || 'Something went wrong')
            })
    }

    async completeTask(id: string): Promise<TodoModel> {

        return this.prismaService.todo.findFirst({
            where: { id: id, isComplete: false },
        })
            .then((todo) => {
                return this.prismaService.todo.update({
                    where: { id: id },
                    data: { isComplete: true },
                    select: {
                        id: true,
                        task: true,
                        isComplete: true,
                        userId: true,
                        user: {
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
                        }

                    }
                })
            })
            .catch((error) => {
                throw new BadRequestException(error.message || 'Something went wrong')
            })
    }

    async deleteTodo(id: string): Promise<TodoModel> {
        return this.prismaService.todo.delete({
            where: { id: id },
            select: {
                id: true,
                task: true,
                isComplete: true,
                userId: true,
                user: {
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
                }

            }
        })
            .then((todo) => todo)
            .catch((error) => {
                throw new BadRequestException("Task Not Found")
            })
    }
}
