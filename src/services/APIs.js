import axios from "axios";

const baseURL = "https://api.m3o.com/v1/user";
const token = "YjkzM2RiNmUtOTE4OS00OWE3LThhNWEtYzE3MjgxNTA5Y2Uw";
const config = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export const createUser = (data) => {
  return axios({
    method: "post",
    url: `${baseURL}/Create`,
    headers: config,
    data,
  });
};

export const login = (data) => {
  return axios({
    method: "post",
    url: `${baseURL}/Login`,
    headers: config,
    data,
  });
};

export const logout = (data) => {
  return axios({
    method: "post",
    url: `${baseURL}/Logout`,
    headers: config,
    data,
  });
};
