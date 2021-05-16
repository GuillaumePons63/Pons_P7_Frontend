import axios from "axios";

export const HTTP = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export const authHttp = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    Authorization: "Bearer" + " " + localStorage.getItem("token"),
  },
});

export default axios;
