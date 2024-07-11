import axios from "axios"

export const api = axios.create({
	baseURL: "https://planner-api-bay.vercel.app",
})
