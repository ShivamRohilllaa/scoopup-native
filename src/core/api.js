import axios from 'axios'

const api = axios.create({
    baseURL: 'https://scoopup.onrender.com/',
    headers: {
        'Content-Type': 'application/json',

    }
})

export default api