import axios from "axios";

const address = "https://argonauts-armand-meunier.herokuapp.com/api/";

const API = axios.create();
API.defaults.baseURL = address;
API.defaults.headers.common.accept = "application/json";
export default API;
