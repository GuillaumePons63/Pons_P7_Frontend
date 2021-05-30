import axios from "axios";

// Utilisé pour le login et le sign in
export const http = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default axios;
