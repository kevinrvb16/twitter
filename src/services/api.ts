import axios from "axios";

export const api = axios.create({
    baseURL: "https://maratonas-academy-twitter.herokuapp.com/"
})