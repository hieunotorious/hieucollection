import "swiper/css";

import { Flex, FlexProps, Text } from "@chakra-ui/react";
import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

import CategoryCard from "app/component/CategoryCard";
import { useResponsive } from "app/hooks/useResponsive";
import Container from "../Container";

type Props = {} & FlexProps;

export type CategoryType = {
  id: string;
  title: string;
  img: string;
  href?: string;
};

const categories: CategoryType[] = [
  { id: uuidv4(), title: "Goku", img: "/images/shfgoku.jpeg" },
  { id: uuidv4(), title: "Spiderman", img: "/images/spidermanhasbro.webp" },
  { id: uuidv4(), title: "Luffy", img: "/images/luffy.jpeg" },
  { id: uuidv4(), title: "Vegeta", img: "/images/vegeta.jpeg" },
  { id: uuidv4(), title: "Ghost Rider", img: "/images/ghostrider.webp" },
  { id: uuidv4(), title: "Zorro", img: "/images/zorro.jpeg" },
  { id: uuidv4(), title: "Gohan", img: "/images/goahn.jpeg" },
  { id: uuidv4(), title: "Sanji", img: "/images/sanji.jpeg" },
  { id: uuidv4(), title: "IronMan", img: "/images/ironman.webp" },
];

const Section2 = ({ ...props }: Props) => {
  const { isMobile, isMobileOrTablet } = useResponsive();
  return (
    <Container>
      <Flex
        mt={isMobileOrTablet ? "110px" : "10px"}
        direction="column"
        textAlign={isMobileOrTablet ? "center" : "left"}
        alignItems={isMobileOrTablet ? "center" : "flex-start"}
        {...props}
      >
        <Text variant={isMobile ? "h5_mobile" : "h5"}>Categories</Text>
        <Text
          maxW="370px"
          mt="1rem"
          fontSize="md"
          fontWeight="medium"
          color="#5B5F62"
        >
          Here are lots of interesting destinations to visit, but don’t be
          confused—they’re already grouped by category.
        </Text>

        <Swiper
          style={{ width: isMobile ? "400px" : "1850px", marginTop: "40px" }}
          slidesPerView="auto"
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop
          centeredSlides
          grabCursor
          className="mySwiper"
        >
          {categories.map((item) => (
            <SwiperSlide style={{ width: 170 }} key={item.id}>
              <CategoryCard title={item.title} img={item.img} id={item.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Container>
  );
};

export default Section2;
