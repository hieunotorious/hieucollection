import "swiper/css";
import useTranslation from "next-translate/useTranslation";
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
  const {
    isSmallDevice,
    isMobile,
    isMobileOrTablet,
    isTabletOrLaptop,
    isBigScreen,
  } = useResponsive();
  const { t } = useTranslation();

  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <Flex
        mt={isMobileOrTablet ? "50px" : "10px"}
        direction="column"
        textAlign="center"
        alignItems="center"
        w="full"
        {...props}
      >
        <Text
          variant={isMobile ? "h5_mobile" : "h5"}
          textTransform="uppercase"
          marginTop="3rem"
        >
          {t("characters")}
        </Text>
        <Text maxW="600px" mt="1rem" variant={isMobile ? "h4_mobile" : "h4"}>
          {t("text10")}
        </Text>

        <Swiper
          style={{
            width: isSmallDevice
              ? "300px"
              : isMobile
              ? "350px"
              : isMobileOrTablet
              ? "700px"
              : isTabletOrLaptop
              ? "900px"
              : isBigScreen
              ? "1300px"
              : "1415px",
            marginTop: "40px",
          }}
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
