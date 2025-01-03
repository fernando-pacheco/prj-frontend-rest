import { core } from "@/api/core"

export class ProductService {
    async getProducts() {
        try {
            const response = await core.get("/product")
            return response.data
        } catch (error) {
            console.error(error)
        }
    }
}
