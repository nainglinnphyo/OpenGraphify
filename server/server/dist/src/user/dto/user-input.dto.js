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
exports.CreateUserInput = exports.CreateOrganizationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const enum_1 = require("../model/enum");
let CreateOrganizationInput = exports.CreateOrganizationInput = class CreateOrganizationInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateOrganizationInput.prototype, "name", void 0);
exports.CreateOrganizationInput = CreateOrganizationInput = __decorate([
    (0, graphql_1.InputType)()
], CreateOrganizationInput);
let CreateUserInput = exports.CreateUserInput = class CreateUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_1.GENDER, { nullable: true }),
    __metadata("design:type", Object)
], CreateUserInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => CreateOrganizationInput),
    __metadata("design:type", CreateOrganizationInput)
], CreateUserInput.prototype, "organization", void 0);
exports.CreateUserInput = CreateUserInput = __decorate([
    (0, graphql_1.InputType)()
], CreateUserInput);
//# sourceMappingURL=user-input.dto.js.map