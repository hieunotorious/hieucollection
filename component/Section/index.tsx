// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Flex } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Slide from "./Slide";
import Container from "../Container";
import Image from "next/image";
import { useResponsive } from "app/hooks/useResponsive";

type Props = {};

const Section = (props: Props) => {
  const { t } = useTranslation();
  const { isMobile, isTabletOrLaptop, isDesktop } = useResponsive();
  return (
    <Flex id="section1" direction={isMobile ? "column" : "row"}>
      <Swiper
        style={{ width: "100%", height: isMobile ? "200px" : "600px" }}
        spaceBetween={30}
        effect={"coverflow"}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        navigation
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            banner="/images/slider/slider_1.jpeg"
            title={t("HIEUCOLLECTION")}
            description={t("mcfarlane_figures")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            banner="/images/slider/slider_2.jpeg"
            title={t("HIEUCOLLECTION")}
            description={t("marvel_legend_figures")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            banner="/images/slider/slider_4.jpeg"
            title={t("HIEUCOLLECTION")}
            description={t("statue_figuart")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            banner="/images/slider/slider_5.jpeg"
            title={t("HIEUCOLLECTION")}
            description={t("shf_figures")}
          />
        </SwiperSlide>
      </Swiper>
      <Flex
        w={isMobile ? "full" : "30%"}
        direction="column"
        padding="1px"
        gap="1px"
        h={isMobile ? "500px" : "full"}
      >
        <Flex paddingBottom="0 " position="relative" h="full">
          <Image layout="fill" src="/images/cat.jpeg" alt=""></Image>
        </Flex>
        <Flex position="relative" h="full">
          <Image layout="fill" src="/images/s2.jpeg" alt=""></Image>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Section;
