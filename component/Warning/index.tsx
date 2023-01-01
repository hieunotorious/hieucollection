import { Flex, FlexProps, Text } from "@chakra-ui/react";
import Container from "app/component/Container";
import { useResponsive } from "app/hooks/useResponsive";
import useTranslation from "next-translate/useTranslation";
type Props = {} & FlexProps;

const Warning = ({ ...props }: Props) => {
  const { isMobile } = useResponsive();
  const { t } = useTranslation();
  return (
    <Container>
      <Flex justifyContent="center" direction="row" gap="2rem">
        <Flex border="1px" mt="5rem">
          <Text m="1rem">
            General Safety Warning: Products sold by BBTS may be intended for
            Adult Collectors. Products may contain sharp points, small parts,
            choking hazards, and other elements not suitable for children under
            16 years old.
          </Text>
        </Flex>
        <Flex border="1px" mt="5rem">
          <Text m="1rem">
            This item is brand new and in mint condition Packaging is case fresh
            but may have flaws Suitable to display in package or to open
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Warning;
