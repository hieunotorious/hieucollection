import axiosClient from "app/interceptor";

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
