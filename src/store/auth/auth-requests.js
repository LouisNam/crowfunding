const { default: axios } = require("api/axios");

export const requestRegister = (data) => {
  return axios.post("/auth/register", { ...data });
};

export const requestLogin = (data) => {
  return axios.post("/auth/login", { ...data });
};
