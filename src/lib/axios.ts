import axios from "axios"

export const api = axios.create({
	baseURL: "https://planner-api-chi.vercel.app/",
})
