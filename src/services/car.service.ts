import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {ICar} from "../interfaces";

export const carService = {
    getAll: () => axiosService.get<ICar[]>(urls.cars)
}