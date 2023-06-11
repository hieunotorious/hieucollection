import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Container from "../Container";
import { useResponsive } from "app/hooks/useResponsive";
import { Flex, Stack, Text, Box } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useContext, useEffect, useState } from "react";

import { getProduct } from "app/services/ProductService";
import { InferGetStaticPropsType } from "next";
import { AuthContext } from "app/context/authContext";
import { AllType, BrandType, CategoryType } from "app/api/auth/models/product";

export const getStaticProps = async () => {
  const product = await getProduct();
  return {
    props: {
      product,
    },
  };
};
const Content = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [products, setProduct] = useState(product);

  const filterName = (name: string) => {
    if (!!name.trim()) {
      const filterProducts = product.filter((item, index) => {
        return item.name.toUpperCase().indexOf(name.toUpperCase()) > -1;
      });

      setProduct(filterProducts);
    } else {
      setProduct(product);
    }
  };

  const filterAll = (all: AllType) => {
    const filterProducts = product.filter((item, index) => {
      return item.all === all;
    });
    setProduct(filterProducts);
  };

  const filterBrand = (brand: BrandType) => {
    const filterProducts = product.filter((item, index) => {
      return item.brand === brand;
    });
    setProduct(filterProducts);
  };
  const filterCategory = (category: CategoryType) => {
    const filterProducts = product.filter((item, index) => {
      return item.category === category;
    });
    setProduct(filterProducts);
  };
  const { t } = useTranslation();
  const { setUser } = useContext(AuthContext);
  const { isMobile, isMobileOrTablet, isDesktop } = useResponsive();
  const router = useRouter();
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Container justifyContent="center" direction="column" alignItems="center">
      <Stack alignItems="left" justifyContent="center" width="1400px">
        <Text variant="h5" data-aos="fade-up">
          About us
        </Text>
        <Text data-aos="fade-up" variant="h6">
          It&apos;s not just a toy, it&apos;s a passion
        </Text>
        <Text data-aos="fade-up" variant="h4">
          As a child , I greatly enjoyed Transformers, DC, Marvel, and Anime...
          I drifted away from these toys as I progressed through school, but
          rediscovered my love of collecting toys while I was in college. I
          spent the next few years collecting, buying . After graduating college
          in 2023, I had the summer off and decided to try selling toys full
          time before looking for a &quot;real job&quot;.
        </Text>
      </Stack>
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
        gap={
          isMobile
            ? "2rem"
            : isMobileOrTablet
            ? "6px"
            : isDesktop
            ? "2rem"
            : "10rem"
        }
        marginTop="5rem"
      >
        <Box
          data-aos="zoom-in-up"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "15px 25px",
            borderRadius: "12px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 2px 4px #F6921E",
          }}
        >
          <Stack alignItems="center">
            <Image src="/images/shflogo.png" width="130px" height="50px" />
            <Text width="200px" variant="h1" textAlign="center">
              {t("shf_figures")}
            </Text>
          </Stack>
        </Box>

        <Box
          data-aos="zoom-in-up"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "15px 25px",
            borderRadius: "12px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 2px 4px #F6921E",
          }}
        >
          <Stack alignItems="center">
            <Image src="/images/mcflogo.jpg" width="50px" height="50px" />

            <Text width="200px" variant="h1" textAlign="center">
              {t("mcfarlane_figures")}
            </Text>
          </Stack>
        </Box>

        <Box
          data-aos="zoom-in-up"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "15px 25px",
            borderRadius: "12px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 2px 4px #F6921E",
          }}
        >
          <Stack alignItems="center">
            <Image src="/images/hasbrologo.jpeg" width="80px" height="50px" />

            <Text width="200px" variant="h1" textAlign="center">
              {t("hasbro")}
            </Text>
          </Stack>
        </Box>
      </Stack>
      {/* <Stack
        marginTop="10rem"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
      >
        <Flex direction="column" alignItems="center">
          <Text
            data-aos="fade-up"
            variant="h5"
            textTransform="uppercase"
            textAlign={isMobile ? "center" : "center"}
          >
            {t("dragonball_figures")}
          </Text>
          <Text
            data-aos="fade-up"
            width="1500px"
            textAlign="center"
            variant="h4"
          >
            The series begins with a young monkey-tailed boy named Goku
            befriending a teenage girl named Bulma. Together, they go on an
            adventure to find the seven mystical Dragon Balls, which have the
            ability to summon the powerful dragon Shenron, who can grant whoever
            summons him their greatest desire.
          </Text>
        </Flex>
        <Flex gap="5rem" data-aos="zoom-in-up">
          {nameproducts.map((item: any, index: number) => {
            return <ProductItem product={item} key={item.id} />;
          })}
        </Flex>
      </Stack> */}
      <Stack
        marginTop="10rem"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
      >
        <Flex direction="column" alignItems="center">
          <Text
            data-aos="fade-up"
            variant="h5"
            textTransform="uppercase"
            textAlign={isMobile ? "center" : "center"}
          >
            {t("product")}
          </Text>
          <Text
            data-aos="fade-up"
            width="1500px"
            textAlign="center"
            variant="h4"
          >
            Our products are made with the highest quality materials .
          </Text>
        </Flex>
      </Stack>
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
        gap={
          isMobile
            ? "2rem"
            : isMobileOrTablet
            ? "6px"
            : isDesktop
            ? "2rem"
            : "10rem"
        }
        marginTop="5rem"
      >
        <Box
          data-aos="zoom-in-up"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "15px 25px",
            borderRadius: "12px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 2px 4px #F6921E",
          }}
        >
          <Stack alignItems="center">
            <Image
              src="/images/medicomtoylogo.png"
              width="80px"
              height="50px"
            />
            <Text width="200px" variant="h1" textAlign="center">
              {t("medicom")}
            </Text>
          </Stack>
        </Box>

        <Box
          data-aos="zoom-in-up"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "15px 25px",
            borderRadius: "12px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 2px 4px #F6921E",
          }}
        >
          <Stack alignItems="center">
            <Image src="/images/dclogo.png" width="60px" height="50px" />

            <Text width="200px" variant="h1" textAlign="center">
              {t("dc")}
            </Text>
          </Stack>
        </Box>

        <Box
          data-aos="zoom-in-up"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "15px 25px",
            borderRadius: "12px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 2px 4px #F6921E",
          }}
        >
          <Stack alignItems="center">
            <Image src="/images/wweelitelogo.png" width="50px" height="50px" />

            <Text width="200px" variant="h1" textAlign="center">
              {t("wwe")}
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Content;
