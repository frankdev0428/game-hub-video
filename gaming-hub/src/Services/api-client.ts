import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6b33b201b6cd42a1bdb1bcaf7ada29b2'
    }
})