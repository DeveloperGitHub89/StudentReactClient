import axios from "axios";
import { ADMIN_LOGIN_URL } from "../constants/ApiConstants";
import { ADMIN_TOKEN_STORAGE_KEY } from "../constants/AuthConstants";

export function adminLogin(loginCredentials){
    return axios.post(ADMIN_LOGIN_URL,loginCredentials);
}

export function storeToken(token){
    localStorage.setItem(ADMIN_TOKEN_STORAGE_KEY,token);
}

export function removeToken(){
    localStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY);
}

export function getToken(){
    return localStorage.getItem(ADMIN_TOKEN_STORAGE_KEY);
}