import axios from 'axios'

let headers = {};

const axiosInstance = axios.create({
    baseURL: '',
    headers,
})

axiosInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return Promise.resolve(response)
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance