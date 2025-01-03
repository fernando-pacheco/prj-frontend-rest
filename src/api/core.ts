import axios from "axios"

export const core = axios.create({
    baseURL: "http://localhost:3333/",
    headers: {
        "Content-Type": "application/json",
    },
})
