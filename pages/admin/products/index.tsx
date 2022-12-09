import { Flex } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "app/context/authContext";
import ProductItem from "app/component/ProductItem";
import { DefaultProduct } from "app/api/auth/data";
import { AllType } from "app/api/auth/models/product";
import { shuffle } from "lodash";

type Props = {};

const Products = (props: Props) => {
  const { users } = useContext(AuthContext);
  const [products, setProduct] = useState(
    shuffle(
      DefaultProduct.filter((item, index) => {
        return item.all === AllType.sale || item.all === AllType.new;
      })
    )
  );

  return (
    <Flex w="full" wrap="wrap">
      {products.map((item, index) => {
        return <ProductItem product={item} key={item.id} />;
      })}
    </Flex>
  );
};

export default Products;
