import { ProductType } from "./../../api/auth/models/product";
import axios from "axios";
import axiosClient from "app/interceptor";

export const getProduct = async (offset?: number, limit?: number) => {
  const product = await axiosClient.get(
    `/product/all?offset=${offset || 0}&limit=${limit || 0}`
  );

  return (product.data as ProductType[]) || undefined;
};

export const getProductId = async (id: string) => {
  const product = await axiosClient.get(
    `/product/get/${id}
    `
  );

  return (product.data as ProductType) || undefined;
};
