import { Button, Flex, FlexProps, Input, Text } from "@chakra-ui/react";
import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { css } from "@emotion/react";
type Props = {} & FlexProps;
import Image from "next/image";
import { useResponsive } from "app/hooks/useResponsive";
const Brand = ({ ...props }: Props) => {
  const { isMobile, isTabletOrLaptop, isDesktop } = useResponsive();
  return (
    <Flex marginTop="10rem" justifyContent="center" alignItems="center">
      <Flex>
        <Flex>
          <Text fontSize="26px" color="#222222" fontFamily="'Baloo', serif">
            Our Brands Partners
          </Text>
        </Flex>
      </Flex>
      <Flex
        display={isMobile ? "column" : "grid"}
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        gap="2rem"
        marginLeft="2rem"
        css={css`
          overflow: hidden;
          border-radius: 1rem;
          &:hover img {
            scale: 1.2;
          }
        `}
      >
        <Image width="100px" height="100px" src="/images/hasbro.jpeg" alt="" />
        <Image width="100px" height="100px" src="/images/shf.png" alt="" />
        <Image
          width="100px"
          height="100px"
          src="/images/mcfarlane.jpg"
          alt=""
        />
        <Image width="100px" height="100px" src="/images/mafex.png" alt="" />
      </Flex>
    </Flex>
  );
};

export default Brand;
