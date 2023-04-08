const { default: axios } = require("api/axios");

export const requestRegister = (data) => {
  return axios.post("/auth/register", { ...data });
};

export const requestLogin = (data) => {
  return axios.post("/auth/login", { ...data });
};

export const requestFetchMe = (token) => {
  if (!token) return;
  return axios.get("/me", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
