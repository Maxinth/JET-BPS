import axios from "axios";
import { authHeader } from "./auth_service";

const API_URL = "http://localhost:3001";

export const getUser = () => {
  axios
    .get(API_URL + "/users", {
      headers: authHeader(),
    })
    .then((res) => {
      return res.data;
    });
};
