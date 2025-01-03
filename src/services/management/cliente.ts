import { management } from "@/api/management"
import { RegisterClienteProps } from "../../interfaces/register"
import { AxiosError } from "axios"

export class ClienteService {
    async clienteRegister(body: RegisterClienteProps) {
        try {
            const response = await management.post("/cliente", body)
            return response
        } catch (error) {
            if (error instanceof AxiosError) {
                return error.response
            }

            return error
        }
    }
}
