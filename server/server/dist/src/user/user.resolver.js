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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("./user.service");
const user_model_1 = require("./model/user.model");
const user_input_dto_1 = require("./dto/user-input.dto");
let UserResolver = exports.UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async findAllUser() {
        return this.userService.findAll();
    }
    async findUserById(id) {
        return this.userService.findUserById(id);
    }
    async createUser(createData) {
        return this.userService.createUser(createData);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [user_model_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findAllUser", null);
__decorate([
    (0, graphql_1.Query)(() => user_model_1.User),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findUserById", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.User),
    __param(0, (0, graphql_1.Args)('createData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_dto_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
exports.UserResolver = UserResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
//# sourceMappingURL=user.resolver.js.map