import { SocialPayload, UpdateUser } from "app/api/auth/models/user";
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
  const res = await axiosClient.post(`/auth/login`, {
    username,
    password,
  });
  return res.data || undefined;
};

export const socialLogin = async (id_token: string) => {
  const res = await axiosClient.post(`/auth/social_login`, { id_token });
  return res.data || undefined;
};

export const signup = async (
  username: string,
  password: string,
  email: string
) => {
  const res = await axiosClient.post(`/auth/signup`, {
    username,
    password,
    email,
  });
  return res.data || undefined;
};
export const logout = async () => {
  if (typeof window === "undefined") return;
  const res = await axiosClient.post(`/auth/logout`, {
    refreshToken: localStorage.getItem("refresh_token"),
  });
  return res.data;
};

export const updateSelfUser = async (user: UpdateUser) => {
  const res = await axiosClient.patch(`/user/update_self`, user);
  return res.data;
};
