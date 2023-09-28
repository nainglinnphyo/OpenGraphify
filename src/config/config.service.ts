import { Injectable } from '@nestjs/common'
import * as fs from 'fs'
import * as Joi from 'joi'
import * as dotenv from 'dotenv'

export interface EnvConfig {
    [key: string]: string
}

@Injectable()
export class ConfigService {
    private readonly envConfig: EnvConfig

    constructor(public filePath: string) {
        let file: Buffer | undefined
        try {
            file = fs.readFileSync(filePath)
        } catch (error) {
            file = fs.readFileSync('development.env')
        }

        const config = dotenv.parse(file)
        this.envConfig = this.validateInput(config)
    }

    private validateInput(envConfig: EnvConfig): EnvConfig {
        const envVarsSchema: Joi.ObjectSchema = Joi.object({
            JWT_SECRET: Joi.string().required(),
            JWT_EXPIRES_IN: Joi.number(),
            NODE_ENV: Joi.string().required(),
            EMAIL_USERNAME: Joi.string().required(),
            EMAIL_PASSWORD: Joi.string().required(),
        })

        const { error, value: validatedEnvConfig } =
            envVarsSchema.validate(envConfig)
        if (error) {
            throw new Error(
                `Config validation error in your env file: ${error.message}`
            )
        }
        return validatedEnvConfig
    }

    get jwtExpiresIn(): number | undefined {
        if (this.envConfig.JWT_EXPIRES_IN) {
            return +this.envConfig.JWT_EXPIRES_IN
        }
        return undefined
    }

    get emailUserName(): string | undefined {
        return this.envConfig.EMAIL_USERNAME || ''
    }

    get emailPassword(): string | undefined {
        return this.envConfig.EMAIL_PASSWORD || ''
    }

    get nodeEnv(): string | undefined {
        return this.envConfig.NODE_ENV || ''
    }

    get jwtSecret(): string {
        return this.envConfig.JWT_SECRET || ''
    }
}
