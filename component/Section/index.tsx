// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Flex, Text } from "@chakra-ui/react";
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
    <Flex
      id="section1"
      display={isMobile ? "none" : "flex"}
      direction={isMobile ? "column" : "row"}
    >
      <Swiper
        style={{ width: "100%", height: isMobile ? "200px" : "800px" }}
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
            description={t("action_figures_statue_collectibles_and_more!")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            banner="/images/slider/slider_2.jpeg"
            title={t("HIEUCOLLECTION")}
            description={t("action_figures_statue_collectibles_and_more!")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            banner="/images/slider/slider_4.jpeg"
            title={t("HIEUCOLLECTION")}
            description={t("action_figures_statue_collectibles_and_more!")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            banner="/images/slider/slider_5.jpeg"
            title={t("HIEUCOLLECTION")}
            description={t("action_figures_statue_collectibles_and_more!")}
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default Section;
