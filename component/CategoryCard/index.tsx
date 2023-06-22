import { Button, Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";

import { CategoryType } from "app/component/Slide";
import Container from "../Container";

type CategoryCardType = {} & CategoryType & FlexProps;

const CategoryCard = ({ img, title, href, ...props }: CategoryCardType) => {
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
            style={{ borderRadius: "10px", gap: "1rem" }}
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
            <Text fontSize="1.25rem" fontWeight="semibold" color="white">
              Visite
            </Text>
          </Button>
        </Flex>
        <Text mt="1rem" fontSize="26px" fontWeight="semibold">
          {title}
        </Text>
      </Flex>
    </Container>
  );
};

export default CategoryCard;
