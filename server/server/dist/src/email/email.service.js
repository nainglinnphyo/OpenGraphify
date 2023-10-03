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
exports.EmailService = void 0;
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const config_service_1 = require("../config/config.service");
const common_1 = require("@nestjs/common");
let EmailService = exports.EmailService = class EmailService {
    constructor(configService) {
        this.configService = configService;
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: this.configService.emailUserName || '',
                pass: this.configService.emailPassword || '',
            },
        });
    }
    async sendMail(to, subject, templatePath, data) {
        const html = this.compileTemplate(templatePath, data);
        const mailOptions = {
            from: 'graphifyopen@gmail.com',
            to,
            subject,
            html: `${html}`,
        };
        return this.transporter.sendMail(mailOptions);
    }
    compileTemplate(templatePath, data) {
        const template = handlebars.compile(fs.readFileSync(templatePath, 'utf8'));
        return template(data);
    }
};
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], EmailService);
//# sourceMappingURL=email.service.js.map