import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:3030",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": "true",
    Accept: "*",
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },

  transformRequest: [
    (data) => {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    (data) => {
      return JSON.parse(data);
    },
  ],
});
