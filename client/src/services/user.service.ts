import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const authHeaderObj: any = authHeader();   // todo - add type 

const getPublicContent = () => {
  return axios.get(API_URL + "all");
}

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeaderObj });
}

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeaderObj });
}

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeaderObj });
}

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};