import { User } from 'src/user/dto/user-input.dto'

export interface LoginResponse {
    user: User
    token: string
}
