import { Flex } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "app/context/authContext";
import ProductItem from "app/component/ProductItem";
import { AllType } from "app/api/auth/models/product";
import { shuffle } from "lodash";

type Props = {};

const Products = (props: Props) => {
  const [products, setProduct] = useState([]);

  return <Flex w="full" wrap="wrap"></Flex>;
};

export default Products;
