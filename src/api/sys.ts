import axios from "axios"

export const sys = axios.create({
    baseURL: "http://localhost:3333/",
    headers: {
        "Content-Type": "application/json",
    },
})
