import { Button, Flex, FlexProps, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { css } from "@emotion/react";
type Props = {} & FlexProps;

const Banner = ({ ...props }: Props) => {
  const { t } = useTranslation();
  return (
    <Flex gap="2rem" alignItems="center" justifyContent="center">
      <Flex
        position="relative"
        mt="124px"
        mb="145px"
        background="#b5def2"
        borderRadius="30px"
        w="500px"
        gap="2rem"
        h="350px"
      >
        <Flex
          position="absolute"
          w="100%"
          h="full"
          top="0px"
          left="0px"
          zIndex={1}
        >
          <Image
            border="2rem"
            borderRadius="3rem"
            w="full"
            h="full"
            src="/images/tnk.jpeg"
          />
        </Flex>
        <Flex
          direction="column"
          w="full"
          h="350px"
          justifyContent="center"
          alignItems="center"
          zIndex={2}
        >
          <Text
            fontWeight="semibold"
            lineHeight="40px"
            letterSpacing="0.0015em"
            color=" #fff"
            fontFamily="'Baloo', serif"
            textTransform="uppercase"
          >
            BEST CHOICE
          </Text>
          <Text
            mt="1rem"
            fontSize="16px"
            fontWeight="normal"
            lineHeight="26px"
            color=" #fff"
            marginTop="2rem"
          >
            Vitae, distinctio! Voluptates delectus nam voluptatem consequatur .
          </Text>
          <Flex
            _placeholder={{
              fontWeight: 400,
              fontSize: 14,
              lineHeight: 14,
              color: " #fff",
            }}
            fontSize="14px"
            background="b5def2"
            padding="10px 12px"
            borderRadius="12px"
            marginTop="2rem"
          >
            <Button
              variant="submit"
              _hover={{
                opacity: 0.6,
              }}
              w="100px"
              p="0"
              boxShadow="0px 5px 14px rgba(247, 103, 67, 0.25)"
              background="#b5def2"
              borderRadius="12px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {t("shop_now")}
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        position="relative"
        mt="124px"
        mb="145px"
        background="#b5def2"
        borderRadius="30px"
        w="500px"
        h="350px"
      >
        <Flex
          position="absolute"
          w="100%"
          h="full"
          top="0px"
          left="0px"
          zIndex={1}
        >
          <Image
            border="2rem"
            borderRadius="3rem"
            w="full"
            h="full"
            src="/images/spider.jpeg"
          />
        </Flex>
        <Flex
          direction="column"
          w="full"
          h="350px"
          justifyContent="center"
          alignItems="center"
          zIndex={2}
        >
          <Text
            fontWeight="semibold"
            lineHeight="40px"
            letterSpacing="0.0015em"
            color=" #fff"
            fontFamily="'Baloo', serif"
            textTransform="uppercase"
          >
            HieuCollection
          </Text>
          <Text
            mt="1rem"
            fontSize="16px"
            fontWeight="normal"
            lineHeight="26px"
            color=" #fff"
            marginTop="2rem"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
          <Flex
            _placeholder={{
              fontWeight: 400,
              fontSize: 14,
              lineHeight: 14,
              color: " #fff",
            }}
            fontSize="14px"
            background="b5def2"
            padding="10px 12px"
            borderRadius="12px"
            marginTop="2rem"
          >
            <Button
              variant="submit"
              _hover={{
                opacity: 0.6,
              }}
              w="100px"
              p="0"
              boxShadow="0px 5px 14px rgba(247, 103, 67, 0.25)"
              background="#b5def2"
              borderRadius="12px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {t("shop_now")}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Banner;
