import { management } from "@/api/management"
import { TelefoneRegisterProps } from "../../interfaces/telefone"
import { AxiosError } from "axios"

export class TelefoneService {
    async telefoneRegister(body: TelefoneRegisterProps) {
        try {
            const response = management.post("/telefone", body)
            return response
        } catch (error) {
            if (error instanceof AxiosError) {
                return error.response
            }

            return error
        }
    }
}
