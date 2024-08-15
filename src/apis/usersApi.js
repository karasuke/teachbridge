import axios from "axios";

export const usersApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/users`,
    withCredentials: true,
});


usersApi.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token') ?? null;

        if (token) {
            config.headers["Authorization"] = token;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

