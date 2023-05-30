import axios from 'axios';

const api = axios.create({
    baseURL: 'https://indicai-api.cyclic.app/api'
});

export default api;