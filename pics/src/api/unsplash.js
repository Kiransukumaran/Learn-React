import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID T0vMqHDI9r82J4Z6n3g1qxTir6xQYvttH7Yt5vIn06Y'
    }
});