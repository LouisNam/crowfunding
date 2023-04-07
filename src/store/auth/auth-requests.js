const { default: axios } = require("api/axios");

export const requestRegister = (data) => {
  return axios.post("/auth/register", {});
};
