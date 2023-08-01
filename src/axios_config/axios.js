import axios from "axios";

const instance = axios.create({
    baseURL:'http://127.0.0.1:8000/api/v1',
    timeout:10000
})

instance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config
}, function (error) {
    return Promise.reject(error);
  });

export default instance;