import axios from "axios";

import baseURL from "../config/usrls";

export const axiosService =  axios.create({
    baseURL
});