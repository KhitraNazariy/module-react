import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const photoService = {
    getById: (id) => axiosService.get(`${urls.albums}/${id}${urls.photos}`).then(value => value.data)
}