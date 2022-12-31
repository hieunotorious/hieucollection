import { Button, Flex, FlexProps, Input, Text } from "@chakra-ui/react";
import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { css } from "@emotion/react";
type Props = {} & FlexProps;
import Image from "next/image";
import { useResponsive } from "app/hooks/useResponsive";
import useTranslation from "next-translate/useTranslation";
const Brand = ({ ...props }: Props) => {
  const { isMobile, isTabletOrLaptop, isDesktop } = useResponsive();
  const { t } = useTranslation();
  return (
    <Flex
      display={isMobile ? "none" : "flex"}
      direction={isMobile ? "column" : "row"}
      marginTop={isMobile ? "3rem" : "10rem"}
      justifyContent="center"
      alignItems="center"
    >
      <Flex>
        <Flex>
          <Text
            ml={isMobile ? "none" : "15rem"}
            fontSize="26px"
            color="#222222"
            fontFamily="'Baloo', serif"
          >
            {t("our_brand_partners")}
          </Text>
        </Flex>
      </Flex>
      <Flex
        display={isMobile ? "column" : "grid"}
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        gap="2rem"
        marginLeft={isMobile ? "1rem" : "2rem"}
        css={css`
          overflow: hidden;
          border-radius: 1rem;
          &:hover img {
            scale: 1.2;
          }
        `}
      >
        <Image
          src="https://bbts1.azureedge.net/site-images/nav_tf-white_sm.jpg"
          alt=""
          width={90}
          height={40}
        ></Image>
        <Image
          src="https://bbts1.azureedge.net/site-images/nav_dccomics_sm.jpg"
          width={90}
          height={40}
          alt=""
        ></Image>
        <Image
          src="https://bbts1.azureedge.net/site-images/nav_marvel_sm.jpg"
          width={90}
          height={40}
          alt=""
        ></Image>
      </Flex>
    </Flex>
  );
};

export default Brand;
