import { ProductType } from "./../../api/auth/models/product";
import axios from "axios";

export const getProduct = async (offset?: number, limit?: number) => {
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/product/all?offset=${offset || 0}&limit=${
      limit || 0
    }`
  );
  const data = await product.json();
  return (data as ProductType[]) || undefined;
};

export const getProductId = async (id: string) => {
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/product/get/${id}
    `
  );
  const data = await product.json();
  return (data as ProductType) || undefined;
};
