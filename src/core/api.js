import axios from 'axios'

export const ADDRESS = 'https://scoopup.onrender.com/';

const api = axios.create({
    baseURL: 'https://scoopup.onrender.com/',
    headers: {
        'Content-Type': 'application/json',

    }
})

export default api