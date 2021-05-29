import axios from "axios";

// Utilisé pour le login et le sign in
export const HTTP = axios.create({
  baseURL: "http://localhost:3000/api/",
});

//Utilisé pour les autres requêtes. Permet d'envoyer le token
export const authHttp = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    Authorization: "Bearer" + " " + localStorage.getItem("token"),
  },
});

export default axios;
