import { Flex, FlexProps } from "@chakra-ui/react";
type Props = {} & FlexProps;
import Image from "next/image";
import { useResponsive } from "app/hooks/useResponsive";
import useTranslation from "next-translate/useTranslation";
const Header = ({ ...props }: Props) => {
  const { isMobile } = useResponsive();
  const { t } = useTranslation();

  return (
    <Flex
      display={isMobile ? "flex" : "none"}
      flexDirection="row"
      gap="1rem"
      mb="5rem"
    >
      <Flex>
        <Image
          src="https://bbts1.azureedge.net/site-images/nav_tf-white_sm.jpg"
          alt=""
          width={60}
          height={26}
        ></Image>
      </Flex>
      <Flex>
        <Image
          src="https://bbts1.azureedge.net/site-images/nav_dccomics_sm.jpg"
          alt=""
          width={60}
          height={26}
        ></Image>
      </Flex>
      <Flex>
        <Image
          src="https://bbts1.azureedge.net/site-images/nav_marvel_sm.jpg"
          alt=""
          width={60}
          height={26}
        ></Image>
      </Flex>
    </Flex>
  );
};

export default Header;
