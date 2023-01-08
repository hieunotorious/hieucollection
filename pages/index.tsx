import { useContext } from "react";
import Brand from "app/component/Brand";
import Banner from "app/component/Banner";
import { ProductType } from "app/api/auth/models/product";
import Section from "app/component/Section";
import NewLetter from "app/component/NewLetter";
import useTranslation from "next-translate/useTranslation";
import Container from "app/component/Container";
import { getProduct } from "app/services/ProductService";
import { InferGetStaticPropsType } from "next";
import { AuthContext } from "app/context/authContext";
import Banners from "app/component/Banners";
import ProductItem from "app/component/ProductItem";
import NewProduct from "app/component/NewProduct";
import DragonballProduct from "app/component/DragonballProduct";
import PreProduct from "app/component/PreProduct";
import SpidermanProduct from "app/component/SpidermanProduct";
import TransformerProduct from "app/component/TransformerProduct";
import SaleProduct from "app/component/SaleProduct";

export const getStaticProps = async () => {
  const product = await getProduct();
  return {
    props: {
      product,
    },
  };
};

const Home = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();
  const { setUser } = useContext(AuthContext);

  const renderProducts = (product: ProductType, index: number) => {
    return <ProductItem product={product} key={product._id} />;
  };
  return (
    <Container direction="column">
      <Section />

      <NewProduct product={product} />

      <DragonballProduct product={product} />

      <PreProduct product={product} />

      <SpidermanProduct product={product} />

      <Banner />

      <TransformerProduct product={product} />

      <Banners />

      <SaleProduct product={product} />

      <Brand />

      <NewLetter />
    </Container>
  );
};

export default Home;
