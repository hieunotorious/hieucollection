import { UpdateUser } from "app/api/auth/models/user";
import axios from "axios";

export const getUser = async () => {
  const user = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/user/getself`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  return user.data || undefined;
};

export const login = async (username: string, password: string) => {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/user/login`, {
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
  const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/user/signup`, {
    username,
    password,
    email,
  });
  return res.data || undefined;
};
export const logout = async () => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_HOST}/user/logout`,
    { refreshToken: localStorage.getItem("refresh_token") },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
  return res.data;
};

export const updateSelfUser = async (user: UpdateUser) => {
  const res = await axios.patch(
    `${process.env.NEXT_PUBLIC_HOST}/user/update_self`,
    user,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
  return res.data;
};
