import "swiper/css";

import { Flex, FlexProps, Text } from "@chakra-ui/react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import Aos from "aos";
import "aos/dist/aos.css";
import CategoryCard from "app/component/CategoryCard";
import { useResponsive } from "app/hooks/useResponsive";
import Container from "../Container";
import React from "react";

type Props = {} & FlexProps;

export type CategoryType = {
  id: string;
  title: string;
  img: string;
  href?: string;
};

const categories: CategoryType[] = [
  { id: uuidv4(), title: "", img: "/images/batman.jpeg" },
  { id: uuidv4(), title: "", img: "/images/spiderman.jpeg" },
  { id: uuidv4(), title: "", img: "/images/goku.jpeg" },
  { id: uuidv4(), title: "", img: "/images/transformer.jpeg" },
];

const Section = ({ ...props }: Props) => {
  const { isMobile, isMobileOrTablet } = useResponsive();
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <Flex
        display={isMobileOrTablet ? "flex" : "none"}
        direction="column"
        textAlign={isMobileOrTablet ? "center" : "left"}
        alignItems={isMobileOrTablet ? "center" : "flex-start"}
        {...props}
      >
        <Swiper
          style={{
            width: "400px",
            height: "300px",
            marginTop: "40px",
          }}
          slidesPerView="auto"
          spaceBetween={80}
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
          {categories.map((item, index) => (
            <SwiperSlide
              style={{
                width: 170,
                transform: `translateY(${index % 2 === 0 ? 50 : 0}px)`,
              }}
              key={item.id}
            >
              <CategoryCard title={item.title} img={item.img} id={item.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Container>
  );
};

export default Section;
