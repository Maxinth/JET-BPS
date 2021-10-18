import axios from "axios";

const API_URL = "http://localhost:3001";

export const getUser = (id) => {
  return axios.get(API_URL + "/user/" + id).then((res) => {
    return res.data;
  });
};

export const register = (name, email, password) => {
  return axios
    .post(API_URL + "/register", {
      name,
      email,
      password,
    })
    .then((res) => {
      return res.data;
    });
};

export const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((res) => {
      sessionStorage.setItem("xys", JSON.stringify(res.data.accessToken));
      sessionStorage.setItem("xs", JSON.stringify(res.data.user));
      return res.data;
    });
};

export const logout = () => {
  sessionStorage.removeItem("xs");
  sessionStorage.removeItem("xys");
};

export const authHeader = () => {
  const user = JSON.parse(sessionStorage.getItem("xys"));
  if (user) {
    return { Authorization: "Bearer " + user };
  } else {
    return {};
  }
};
