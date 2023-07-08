import Container from "app/component/Container";
import Content1 from "app/component/Content/Content1";
import Section from "app/component/Section";
import Slide from "app/component/Slide";
import Title from "app/component/Title";
import useProducts from "app/hooks/useProducts";

const Home = () => {
  const { products, isLoading } = useProducts();

  return (
    <Container direction="column">
      <Title />
      {!isLoading && products && <Content1 product={products} />}

      <Slide />
    </Container>
  );
};

export default Home;
