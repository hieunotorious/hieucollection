import { useToast } from "@chakra-ui/react";
import { ProductType } from "app/api/auth/models/product";
import { getProduct } from "app/services/ProductService";
import { isAxiosError } from "axios";
import useTranslation from "next-translate/useTranslation";
import { useCallback, useEffect, useState } from "react";

const useProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<ProductType[]>();
  const { t } = useTranslation();
  const toast = useToast();

  const getProductsList = useCallback(async () => {
    try {
      const currentProducts = await getProduct();
      setProducts(currentProducts);
      return currentProducts;
    } catch (err) {
      if (isAxiosError(err))
        toast({
          title: t(err.response?.data.message),
          status: "error",
          duration: 5000,
          position: "top-right",
        });
      return undefined;
    } finally {
      setIsLoading(false);
    }
  }, [t, toast]);

  useEffect(() => {
    getProductsList();
  }, [getProductsList]);

  return { isLoading, products, getProductsList };
};

export default useProducts;
