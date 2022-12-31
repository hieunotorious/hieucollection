import { UpdateUser } from "app/api/auth/models/user";
import axiosClient from "app/interceptor";
import axios from "axios";

export const getUser = async () => {
  try {
    const user = await axiosClient.get(`/user/getself`);
    return user.data;
  } catch (err) {
    return undefined;
  }
};

export const login = async (username: string, password: string) => {
  const res = await axiosClient.post(`/user/login`, {
    username,
    password,
  });
  return res.data || undefined;
};
export const signup = async (
  username: string,
  password: string,
  email: string
) => {
  const res = await axiosClient.post(`/user/signup`, {
    username,
    password,
    email,
  });
  return res.data || undefined;
};
export const logout = async () => {
  const res = await axiosClient.post(`/user/logout`, {
    refreshToken: localStorage.getItem("refresh_token"),
  });
  return res.data;
};

export const updateSelfUser = async (user: UpdateUser) => {
  const res = await axiosClient.patch(`/user/update_self`, user);
  return res.data;
};
