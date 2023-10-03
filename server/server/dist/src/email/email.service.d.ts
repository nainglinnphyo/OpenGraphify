import { ConfigService } from '@app/config/config.service';
export declare class EmailService {
    private configService;
    private transporter;
    constructor(configService: ConfigService);
    sendMail(to: string, subject: string, templatePath: string, data: any): Promise<any>;
    private compileTemplate;
}
