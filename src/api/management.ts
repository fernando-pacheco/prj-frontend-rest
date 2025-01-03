import { getToken } from "@/utils/token"
import axios from "axios"

export const management = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        "Content-Type": "application/json",
    },
})

management.interceptors.request.use(
    (config) => {
        const token = getToken()
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
