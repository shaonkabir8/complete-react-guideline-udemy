import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://burger-builder-84ff5.firebaseio.com/',
})

export default instance;