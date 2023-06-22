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
import ProductItem from "app/component/ProductItem";
import Title from "app/component/Title";
import Content1 from "app/component/Content/Content1";
import Content2 from "app/component/Content/Content2";
import Slide from "app/component/Slide";

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
      <Title />
      <Content1 product={product} />

      <Slide />
    </Container>
  );
};

export default Home;
