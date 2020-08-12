import axios from "axios";

const API = axios.create();
API.defaults.baseURL = `http://localhost:4000/api/`;
API.defaults.headers.common.accept = "application/json";
export default API;
