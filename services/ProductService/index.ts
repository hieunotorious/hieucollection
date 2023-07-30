import { ProductType } from "./../../api/auth/models/product";
import axios from "axios";
import axiosClient from "app/interceptor";
import API_ROUTES from "app/constant/api_routes";

export const getProduct = async (offset?: number, limit?: number) => {
  const product = await axiosClient.get(API_ROUTES.PRODUCT.ALL, {
    params: {
      offset: offset || 0,
      limit: limit || 0,
    },
  });

  return (product.data as ProductType[]) || undefined;
};

export const getProductId = async (id: string) => {
  const product = await axiosClient.get(API_ROUTES.PRODUCT.DETAIL(id));

  return (product.data as ProductType) || undefined;
};
