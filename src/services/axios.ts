import axios from "axios";

const baseURL = "https://dummyjson.com";

const api = axios.create({ baseURL });

export default { api };
