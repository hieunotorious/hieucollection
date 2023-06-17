// Import types for React and Next.js
import type { FC } from "react";
import type { NextPage } from "next";
import Image from "next/image";

// Import Stack component from MUI
import { Stack } from "@mui/material";

// Import Swiper components and types
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper";

// Import images from assets folder
import nhatho from "../../public/images/hieu1.jpeg";
import tcv from "../../public/images/hieu2.jpg";

import { StaticImageData } from "next/image";

// Import custom hook for breakpoints

// Define an interface for the data array
interface DataItem {
  img: StaticImageData;
  title: string;
}

// Define the data array as a constant
const data: DataItem[] = [
  {
    img: nhatho,
    title: "nhatho",
  },
  {
    img: tcv,
    title: "tcv",
  },
];

// Define a functional component for the slide
const Slide: FC<DataItem> = (props) => {
  return (
    <Image
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
      src={props.img}
      alt={props.title}
    />
  );
};

// Define a functional component for the slide container
const Slide1: NextPage = () => {
  // Use the custom hook to get the breakpoints

  // Define the swiper options as a constant

  return (
    <Stack direction="row" width="100%" paddingX="0.5rem">
      <Swiper
        style={{ width: "100%", height: "800px" }}
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
        slidesPerView="auto"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
        navigation
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide
            style={{
              width: "120px",
              marginTop: "3rem",
              // transform: `translateY(${index % 2 === 0 ? 50 : 0}px)`,
            }}
            key={item.title}
          >
            <Slide img={item.img} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export default Slide1;
