import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`),
    getUserPosts: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`).then(value => value.data),
    getUserAlbums: (id) => axiosService.get(`${urls.users}/${id}${urls.albums}`).then(value => value.data)
}