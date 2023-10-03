export interface EnvConfig {
    [key: string]: string;
}
export declare class ConfigService {
    filePath: string;
    private readonly envConfig;
    constructor(filePath: string);
    private validateInput;
    get jwtExpiresIn(): number | undefined;
    get emailUserName(): string | undefined;
    get emailPassword(): string | undefined;
    get nodeEnv(): string | undefined;
    get jwtSecret(): string;
}
