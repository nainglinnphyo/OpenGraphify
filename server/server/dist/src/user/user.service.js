"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_service_1 = require("../prisma.service");
const common_1 = require("@nestjs/common");
let UserService = exports.UserService = class UserService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
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
        });
    }
    async findUserById(id) {
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
            return user;
        })
            .catch((err) => {
            throw new common_1.BadRequestException(err.message);
        });
    }
    async createUser(dto) {
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
            return data;
        })
            .catch((error) => {
            if (error?.code === "P2002")
                throw new common_1.ConflictException("User already exists");
            throw new common_1.BadRequestException("Something went wrong");
        });
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map