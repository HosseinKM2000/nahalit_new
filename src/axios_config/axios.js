import axios from "axios";

const instance = axios.create({
    baseURL:"http://api.nahalit.ir/api/v1",
    timeout:10000
})
console.log(localStorage.getItem('access_token'))
instance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config
}, function (error) {
    return Promise.reject(error);
  });

export default instance;