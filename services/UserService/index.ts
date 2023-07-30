import { UpdateUser } from "app/api/auth/models/user";
import API_ROUTES from "app/constant/api_routes";
import axiosClient from "app/interceptor";

export const getUser = async () => {
  try {
    const user = await axiosClient.get(API_ROUTES.USER.GET_SELF);
    return user.data;
  } catch (err) {
    return undefined;
  }
};

export const updateSelfUser = async (user: UpdateUser) => {
  const res = await axiosClient.patch(API_ROUTES.USER.UPDATE_SELF, user);
  return res.data;
};
