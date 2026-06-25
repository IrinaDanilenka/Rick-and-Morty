import axios from "axios";

export const apiClient = () => {
    return axios.create({
        baseURL: 'https://rickandmortyapi.com/api',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
