import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const getUsers = () => {
    return axiosInstance.get('/users');
}

const getUser = (id) => {
    return axiosInstance.get('/users/' + id);
}

const getUserPost = (id) => {
    return axiosInstance.get('/users/' + id + '/posts');
}

export {
    getUsers,
    getUser,
    getUserPost
}