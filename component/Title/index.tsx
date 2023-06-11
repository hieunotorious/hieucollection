import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Container from "../Container";
import { useResponsive } from "app/hooks/useResponsive";
import { Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import banner from "../../public/images/banner.jpeg";
import useOnScreen from "app/hooks/useOnScreen";

function Title() {
  const ref = useRef(null);
  const { isMobile } = useResponsive();
  const router = useRouter();
  const { t } = useTranslation();

  const isVisible = useOnScreen(ref);

  return (
    <Flex direction="column" w="full">
      <Container justifyContent="center" direction="column" alignItems="center">
        {/* <Stack
          style={{
            backgroundImage: "url(/images/banner.jpeg)",
            width: "100%",
            height: "100%",
          }}
        ></Stack> */}
        <Flex>
          <Text variant={isMobile ? "h2_mobile" : "h2"}>hieu</Text>
          <Text variant={isMobile ? "h3_mobile" : "h3"}>collection</Text>
        </Flex>

        <Text variant="h4">
          Action figures, Statue, Collectibles, and More!
        </Text>
        <Flex ref={ref}>
          <Flex mt="60px" height="600px" gap="1rem">
            <Stack
              width="340px"
              sx={{
                transform: `translateY(${isVisible ? 100 : 300}px)`,
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
              width="340px"
              sx={{
                transform: `translateY(${isVisible ? -10 : 600}px)`,
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
              width="340px"
              sx={{
                transform: `translateY(${isVisible ? 100 : 600}px)`,
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
              width="340px"
              sx={{
                transform: `translateY(${isVisible ? -10 : 600}px)`,
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
