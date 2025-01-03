import { management } from "@/api/management"
import { LoginProps } from "../../interfaces/login"
import { AxiosError } from "axios"

export class LoginService {
    async getTokenCliente(body: LoginProps) {
        try {
            const response = await management.post("/token-cliente", body)
            return response
        } catch (error) {
            if (error instanceof AxiosError) {
                return error.response
            }

            return error
        }
    }

    async getTokenFuncionario(body: LoginProps) {
        try {
            const response = await management.post("/token-funcionario", body)
            return response
        } catch (error) {
            if (error instanceof AxiosError) {
                return error.response
            }

            return error
        }
    }
}
