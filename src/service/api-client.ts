import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd13e4c20086e46f485578fa6093258dc'
    }
});
