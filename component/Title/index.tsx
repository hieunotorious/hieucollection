import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Container from "../Container";
import { useResponsive } from "app/hooks/useResponsive";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { useRef } from "react";
import useOnScreen from "app/hooks/useOnScreen";
import Swiper from "app/component/Swiper";

function Title() {
  const ref = useRef(null);
  const { isMobile, isMobileOrTablet, isTabletOrLaptop, isBigScreen } =
    useResponsive();
  const router = useRouter();
  const { t } = useTranslation();

  const isVisible = useOnScreen(ref);

  return (
    <Flex direction="column" w="full" ref={ref}>
      <Container justifyContent="center" direction="column" alignItems="center">
        <Flex>
          <Text variant={isMobile ? "h2_mobile" : "h2"}>hieu</Text>
          <Text variant={isMobile ? "h3_mobile" : "h3"}>collection</Text>
        </Flex>

        <Text variant={isMobile ? "h4_mobile" : "h4"}>
          {t("action_figures_statue_collectibles_and_more!")}
        </Text>
        <Swiper />
        <Flex
          display={
            isMobile
              ? "none"
              : isMobileOrTablet
              ? "none"
              : isTabletOrLaptop
              ? "none"
              : "flex"
          }
          marginX="15rem"
        >
          <Flex
            marginTop="60px"
            height="600px"
            gap="1rem"
            sx={{ overflow: "hidden" }}
          >
            <Stack
              width={isBigScreen ? "320px" : "340px"}
              sx={{
                transform: `translateY(${isVisible ? 150 : 600}px)`,
                opacity: isVisible ? 1 : 0,
                transition: `all 800ms ease-in`,
                borderRadius: "1rem",
              }}
            >
              <Stack
                sx={{
                  transition: `all 300ms ease-in-out`,
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Image
                  style={{ borderRadius: "10px" }}
                  src="/images/batman.jpeg"
                  alt=""
                  width="264px"
                  height="397px"
                />
              </Stack>
            </Stack>
            <Stack
              width={isBigScreen ? "320px" : "340px"}
              sx={{
                transform: `translateY(${isVisible ? 10 : 600}px)`,
                opacity: isVisible ? 1 : 0,
                transition: `all 800ms ease-in`,
                borderRadius: "1rem",
              }}
            >
              <Stack
                sx={{
                  transition: `all 300ms ease-in-out`,
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Image
                  style={{ borderRadius: "10px" }}
                  src="/images/spiderman.jpeg"
                  alt=""
                  width="264px"
                  height="397px"
                />
              </Stack>
            </Stack>
            <Stack
              width={isBigScreen ? "320px" : "340px"}
              sx={{
                transform: `translateY(${isVisible ? 150 : 600}px)`,
                opacity: isVisible ? 1 : 0,
                transition: `all 800ms ease-in`,
                borderRadius: "1rem",
              }}
            >
              <Stack
                sx={{
                  transition: `all 300ms ease-in-out`,
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Image
                  style={{ borderRadius: "10px" }}
                  src="/images/goku.jpeg"
                  alt=""
                  width="264px"
                  height="397px"
                />
              </Stack>
            </Stack>
            <Stack
              width={isBigScreen ? "320px" : "340px"}
              sx={{
                transform: `translateY(${isVisible ? 10 : 600}px)`,
                opacity: isVisible ? 1 : 0,
                transition: `all 800ms ease-in`,
                borderRadius: "1rem",
              }}
            >
              <Stack
                sx={{
                  transition: `all 300ms ease-in-out`,
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Image
                  style={{ borderRadius: "10px" }}
                  src="/images/transformer.jpeg"
                  alt=""
                  width="264px"
                  height="397px"
                />
              </Stack>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}

export default Title;
