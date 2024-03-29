import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { Button, Flex, FlexProps, Text } from "@chakra-ui/react";
import { useResponsive } from "app/hooks/useResponsive";
import APP_ROUTES from "app/constant/app_routes";

type SlideType = {
  title: string;
  description: string;
  banner: string;
} & FlexProps;

const Slide = ({ title, description, banner, ...props }: SlideType) => {
  const { t } = useTranslation();
  const { isMobile, isTabletOrLaptop, isDesktop } = useResponsive();
  return (
    <Flex w={"full"} h="full" position="relative" {...props}>
      <Flex
        direction="column"
        position="relative"
        ml={100}
        maxWidth={500}
        h="full"
        justifyContent="center"
        zIndex={2}
      >
        <Text color="MintCream" fontSize={isMobile ? "10lg" : "6xl"}>
          {title}
        </Text>
        <Text maxWidth="60%" color="MintCream" fontSize={isMobile ? "md" : "l"}>
          {description}
        </Text>
        <Flex mt={isMobile ? "1px" : "16px"}>
          <Button variant="solid" colorScheme="blue" size="lg">
            <Link href={APP_ROUTES.PRODUCT.INDEX}>
              <Text>{t("shop_now")}</Text>
            </Link>
          </Button>
        </Flex>
      </Flex>
      <Image
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        src={banner}
        objectFit="fill"
        layout="fill"
        alt="slide_img"
      />
    </Flex>
  );
};

export default Slide;
