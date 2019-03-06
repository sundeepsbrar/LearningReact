import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 21276fc284d7cc33d352d671a75660784d251d1206f25718cb19fd4a827e3d4f"
    }
});