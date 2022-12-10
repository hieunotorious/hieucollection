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
