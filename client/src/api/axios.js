import axios from "axios";

const address = process.env.URL;

const API = axios.create();
API.defaults.baseURL = address;
API.defaults.headers.common.accept = "application/json";
export default API;
