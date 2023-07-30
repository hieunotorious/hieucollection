import { UserCart } from "app/api/auth/models/user";
import API_ROUTES from "app/constant/api_routes";
import axiosClient from "app/interceptor";

export const addToCart = async (id: string, quanitty?: number) => {
  const res = await axiosClient.post(API_ROUTES.USER.CART.ADD, {
    product_id: id,
    quantity: quanitty || 1,
  });
  return res.data as UserCart[] | undefined;
};

export const removeFromCart = async (id: string) => {
  const res = await axiosClient.post(API_ROUTES.USER.CART.REMOVE, {
    product_id: id,
  });
  return res.data as UserCart[] | undefined;
};

export const updateCartQuantity = async (id: string, minus?: boolean) => {
  const res = await axiosClient.post(API_ROUTES.USER.CART.UPDATE_QUANTITY, {
    product_id: id,
    quantity: minus ? -1 : 1,
  });
  return res.data as UserCart[] | undefined;
};

export const clearCart = async () => {
  const res = await axiosClient.post(API_ROUTES.USER.CART.CLEAR);
  return res.data as { success: boolean } | undefined;
};
