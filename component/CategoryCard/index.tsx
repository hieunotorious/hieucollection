import { Button, Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";
import { useResponsive } from "app/hooks/useResponsive";
import { CategoryType } from "app/component/Slide";
import Container from "../Container";

type CategoryCardType = {} & CategoryType & FlexProps;

const CategoryCard = ({ img, title, href, ...props }: CategoryCardType) => {
  const { isMobile, isMobileOrTablet } = useResponsive();

  return (
    <Container>
      <Flex direction="column" alignItems="center" {...props}>
        <Flex
          css={css`
            &:hover .card_hover {
              opacity: 1;
            }
          `}
          position="relative"
          w="full"
          h="230px"
          borderRadius="full"
        >
          <Image
            src={img}
            fit="contain"
            alt={title}
            style={{ borderRadius: "10px" }}
          />
          <Button
            variant="unstyled"
            className="card_hover"
            opacity={0}
            position="absolute"
            top="0px"
            left="0px"
            w="full"
            h="full"
            background="blackAlpha.400"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              fontSize="1.25rem"
              fontWeight="semibold"
              color="white !important"
              variant={isMobile ? "h4_mobile" : "h4"}
            >
              Visite
            </Text>
          </Button>
        </Flex>
        <Text mt="1rem" variant={isMobile ? "h4_mobile" : "h4"}>
          {title}
        </Text>
      </Flex>
    </Container>
  );
};

export default CategoryCard;
