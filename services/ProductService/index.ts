import { ProductType } from "./../../api/auth/models/product";
import axios from "axios";

export const getProduct = async (offset?: number, limit?: number) => {
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}/product/all?offset=${offset || 0}&limit=${
      limit || 0
    }`
  );
  return (product.data as ProductType[]) || undefined;
};

export const getProductId = async (id: string) => {
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}/product/get/${id}
    `
  );
  return (product.data as ProductType) || undefined;
};
