import axios from "axios";
export const instance = axios.create({
    baseURL : "https://615c4532c298130017736038.mockapi.io/unicoin",
    headers : {"ContentType" : "application/json"}
})