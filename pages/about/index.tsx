import { Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import React from "react";
import ExpCard from "app/component/ExpCard";
import Container from "app/component/Container";
type Props = {} & FlexProps;

const About = ({ ...props }: Props) => {
  return (
    <Container>
      <Flex w="full" alignItems="center" justifyContent="space-between">
        <Flex position="relative">
          <Image width="900px" src="/images/hieu2.jpg" alt="" />
          <>
            <Flex
              w="140px"
              h="218px"
              position="absolute"
              bottom="86px"
              left="-58px"
            >
              <Image src="/images/logo.jpg" alt="" />
            </Flex>
            <Flex
              w="171px"
              h="92px"
              position="absolute"
              bottom="-18px"
              right="0px"
            >
              <Image width="500px" src="/images/f2.jpeg" alt="" />
            </Flex>
          </>
        </Flex>
        <Flex marginLeft="5rem" direction="column">
          <Flex direction="column">
            <Text
              color="#F66F4D"
              fontSize="1.25rem"
              fontWeight="semibold"
              letterSpacing="0.2em"
            >
              Our Experience
            </Text>
            <Text mt="1rem" fontWeight="semibold" lineHeight="66px">
              Our Stories Have Adventures
            </Text>
            <Text mt="1rem" fontSize="md" fontWeight="medium" color="#5B5F62">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              deserunt aliquid consequatur velit a deleniti. Impedit illum
              libero officia, non ipsam provident consequuntur tenetur odio quod
              sunt necessitatibus reprehenderit cumque!
            </Text>
          </Flex>
          <Flex mt="2.5rem">
            <Flex w="full">
              <ExpCard title="12K+" des="Success Journey" />
              <ExpCard title="16+" des="Awards Winning" />
            </Flex>
            <ExpCard title="20+" des="Years Of Experience" />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default About;
