import * as nodemailer from 'nodemailer'
import * as handlebars from 'handlebars'
import * as fs from 'fs'
import { ConfigService } from '@app/config/config.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class EmailService {
    private transporter: nodemailer.Transporter
    constructor(private configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: this.configService.emailUserName || '',
                pass: this.configService.emailPassword || '',
            },
        })
    }
    async sendMail(
        to: string,
        subject: string,
        templatePath: string,
        data: any
    ) {
        const html = this.compileTemplate(templatePath, data)
        const mailOptions = {
            from: 'graphifyopen@gmail.com',
            to,
            subject,
            html: `${html}`,
        }
        return this.transporter.sendMail(mailOptions)
    }

    private compileTemplate(templatePath: string, data: any): string {
        const template = handlebars.compile(
            fs.readFileSync(templatePath, 'utf8')
        )
        return template(data)
    }
}
