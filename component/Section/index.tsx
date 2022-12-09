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

type Props = {};

const Section = (props: Props) => {
  const { t } = useTranslation();
  return (
    <Flex id="section1">
      <Swiper
        style={{ width: "99vw", height: "93vh" }}
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
            banner="/images/slider/slider_3.jpeg"
            title={t("HIEUCOLLECTION")}
            description={t("mafex_figures")}
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
        <SwiperSlide>
          <Slide
            banner="/images/slider/slider_6.jpeg"
            title={t("HIEUCOLLECTION")}
            description={t("wwe_action_figures")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            banner="/images/slider/slider_7.jpeg"
            title={t("HIEUCOLLECTION")}
            description={t("dc_essentials_figures")}
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default Section;
