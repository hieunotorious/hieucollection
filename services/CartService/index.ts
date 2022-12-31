import { UserCart } from "app/api/auth/models/user";
import axiosClient from "app/interceptor";
import axios from "axios";

export const addToCart = async (id: string, quanitty?: number) => {
  const res = await axiosClient.post(`/user/cart/add`, {
    product_id: id,
    quantity: quanitty || 1,
  });
  return res.data as UserCart[] | undefined;
};

export const removeFromCart = async (id: string) => {
  const res = await axiosClient.post(`/user/cart/remove`, { product_id: id });
  return res.data as UserCart[] | undefined;
};

export const updateCartQuantity = async (id: string, minus?: boolean) => {
  const res = await axiosClient.post(`/user/cart/updatequantity`, {
    product_id: id,
    quantity: minus ? -1 : 1,
  });
  return res.data as UserCart[] | undefined;
};

export const clearCart = async () => {
  const res = await axiosClient.post(`/user/cart/clear`);
  return res.data as { success: boolean } | undefined;
};
