import { UserCart } from "app/api/auth/models/user";
import axios from "axios";

export const addToCart = async (id: string, quanitty?: number) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_HOST}/user/cart/add`,
    { product_id: id, quantity: quanitty || 1 },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
  return res.data as UserCart[] | undefined;
};

export const removeFromCart = async (id: string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_HOST}/user/cart/remove`,
    { product_id: id },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
  return res.data as UserCart[] | undefined;
};

export const updateCartQuantity = async (id: string, minus?: boolean) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_HOST}/user/cart/updatequantity`,
    { product_id: id, quantity: minus ? -1 : 1 },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
  return res.data as UserCart[] | undefined;
};

export const clearCart = async () => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_HOST}/user/cart/clear`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
  return res.data as { success: boolean } | undefined;
};
