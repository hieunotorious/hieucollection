import { Flex, FlexProps, Text } from "@chakra-ui/react";

type ExpCardType = {
  title: string;
  des: string;
} & FlexProps;

const ExpCard = ({ title, des, ...props }: ExpCardType) => {
  return (
    <Flex
      borderRadius="2xl"
      w="166px"
      background="rgba(255,255,255,0.7)"
      p="26px"
      direction="column"
      {...props}
    >
      <Text fontWeight="semibold" fontSize="46px" color="#F66F4D">
        {title}
      </Text>
      <Text fontSize="21px" fontWeight="medium" color="#939597">
        {des}
      </Text>
    </Flex>
  );
};

export default ExpCard;
