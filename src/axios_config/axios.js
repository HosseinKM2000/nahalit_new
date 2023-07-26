import axios from "axios";

const instance = axios.create({
    timeout:10000,
    baseURL:process.env.REACT_APP_NAHALIT_BASE_URL
})

export default instance;