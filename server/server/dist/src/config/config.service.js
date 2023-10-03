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
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const Joi = require("joi");
const dotenv = require("dotenv");
let ConfigService = exports.ConfigService = class ConfigService {
    constructor(filePath) {
        this.filePath = filePath;
        let file;
        try {
            file = fs.readFileSync(filePath);
        }
        catch (error) {
            file = fs.readFileSync('development.env');
        }
        const config = dotenv.parse(file);
        this.envConfig = this.validateInput(config);
    }
    validateInput(envConfig) {
        const envVarsSchema = Joi.object({
            JWT_SECRET: Joi.string().required(),
            JWT_EXPIRES_IN: Joi.number(),
            NODE_ENV: Joi.string().required(),
            EMAIL_USERNAME: Joi.string().required(),
            EMAIL_PASSWORD: Joi.string().required(),
        });
        const { error, value: validatedEnvConfig } = envVarsSchema.validate(envConfig);
        if (error) {
            throw new Error(`Config validation error in your env file: ${error.message}`);
        }
        return validatedEnvConfig;
    }
    get jwtExpiresIn() {
        if (this.envConfig.JWT_EXPIRES_IN) {
            return +this.envConfig.JWT_EXPIRES_IN;
        }
        return undefined;
    }
    get emailUserName() {
        return this.envConfig.EMAIL_USERNAME || '';
    }
    get emailPassword() {
        return this.envConfig.EMAIL_PASSWORD || '';
    }
    get nodeEnv() {
        return this.envConfig.NODE_ENV || '';
    }
    get jwtSecret() {
        return this.envConfig.JWT_SECRET || '';
    }
};
exports.ConfigService = ConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [String])
], ConfigService);
//# sourceMappingURL=config.service.js.map