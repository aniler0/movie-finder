import axios from "axios";

const api = () => {
  return axios.create({
    baseURL: "https://dummyapi.io/data/v1",
    headers: {
      "app-id": "6183c1f1f1d3015a85db2a6d",
    },
  });
};

export default api;
