import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-app-90b48-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default instance;