import { Button, Flex, FlexProps, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

type Props = {} & FlexProps;

const Newletter = ({ ...props }: Props) => {
  return (
    <Flex
      position="relative"
      mt="124px"
      mb="145px"
      background="#b5def2"
      borderRadius="30px"
      w="full"
    >
      <Flex
        position="absolute"
        w="100%"
        h="full"
        top="0px"
        left="0px"
        zIndex={1}
      ></Flex>
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
          SIGN UP NEWSLETTER
        </Text>
        <Text
          mt="1rem"
          fontSize="16px"
          fontWeight="normal"
          lineHeight="26px"
          color=" #fff"
          marginTop="2rem"
        >
          Subscribe to get more special Deals, Events and Promotions.
        </Text>
        <Flex
          _placeholder={{
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 14,
            color: " #fff",
          }}
          fontSize="14px"
          background="white"
          padding="10px 12px"
          borderRadius="12px"
          marginTop="2rem"
        >
          <Input variant="unstyled" pl="50px" placeholder="Your Email Letter" />

          <Button
            variant="submit"
            _hover={{
              opacity: 0.6,
            }}
            w="40px"
            p="0"
            boxShadow="0px 5px 14px rgba(247, 103, 67, 0.25)"
            background="#b5def2"
            borderRadius="12px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <SendRoundedIcon />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Newletter;
