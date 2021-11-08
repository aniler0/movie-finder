import axios from "axios";

const api = () => {
  return axios.create({
    baseURL: "https://imdb-api.com/en/API",
  });
};

export default api;
