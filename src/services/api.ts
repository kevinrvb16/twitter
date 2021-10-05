import axios from "axios";
import {IAuth} from '../context/GlobalContext'
export const api = axios.create({
    baseURL: "https://maratonas-academy-twitter.herokuapp.com/"
})

export const apiWithAuth = axios.create({
    baseURL: "https://maratonas-academy-twitter.herokuapp.com/"
})

apiWithAuth.interceptors.request.use(function (config) {
    const auth = localStorage.getItem("@twitter:auth")

    if (auth) {
        const parsedAuth = JSON.parse(auth) as IAuth
        
        config.headers['Authorization'] = `Bearer ${parsedAuth.access_token}`
    }
    return config;
  })

apiWithAuth.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error?.response?.status === 401) {
        localStorage.removeItem('@twitter:auth')
        window.location.href = '/login'
    }

    return Promise.reject(error);
  });