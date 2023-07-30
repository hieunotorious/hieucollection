import React, { useContext, useState } from "react";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import { useResponsive } from "app/hooks/useResponsive";
import Breadcrumb from "app/component/Breadcrumb";
import { Box, Flex, Stack, Text, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import APP_ROUTES from "app/constant/app_routes";
import Info from "app/component/Info";

function Contact() {
  const { isMobile } = useResponsive();
  const { t } = useTranslation();

  return (
    <Flex direction="column" w="full" mt="5rem">
      <Breadcrumb
        marginTop="3rem"
        links={[
          { title: t("home"), href: APP_ROUTES.HOME },
          { title: t("contact"), href: APP_ROUTES.CONTACT },
        ]}
        current={t("login")}
      />
      <Info />
      <Stack alignItems="center">
        <Text variant="h5">{t("contact")}</Text>
        <Text variant="h4">{t("text7")}</Text>
        <Flex alignItems="center" justifyContent="space-between" gap="10rem">
          <Flex alignItems="center" gap="10px">
            <Tooltip label="hieumn2001@gmail.com" placement="top">
              <Link href="mailto:hieumn2001@gmail.com">
                <Image
                  src="/images/EmailMes.png"
                  width="40px"
                  height="40px"
                  alt=""
                />
              </Link>
            </Tooltip>
            <Stack justifyContent="center">
              <Text marginTop="3rem !important" variant="h4">
                Email
              </Text>
              <Text variant="h7">hieumn2001@gmail.com</Text>
            </Stack>
          </Flex>

          <Flex alignItems="center" gap="10px">
            <Tooltip label="0912590467" placement="top">
              <Link href="tel:0912590467">
                <Image
                  src="/images/phoneMes.png"
                  alt=""
                  width="40px"
                  height="40px"
                />
              </Link>
            </Tooltip>
            <Stack>
              <Text marginTop="3rem !important" variant="h4">
                Hotline
              </Text>
              <Text variant="h7">0912590467</Text>
            </Stack>
          </Flex>

          <Flex alignItems="center" gap="10px">
            <Tooltip
              label="102 Nguyễn Trãi, Thành Công, Thành phố Buôn Ma Thuột, Đắk Lắk"
              placement="top"
            >
              <Link href="https://www.google.com/maps/place/102+Nguy%E1%BB%85n+Tr%C3%A3i,+Th%C3%A0nh+C%C3%B4ng,+Th%C3%A0nh+ph%E1%BB%91+Bu%C3%B4n+Ma+Thu%E1%BB%99t,+%C4%90%E1%BA%AFk+L%E1%BA%AFk,+Vi%E1%BB%87t+Nam/@12.6865306,108.0361911,17z/data=!3m1!4b1!4m6!3m5!1s0x31721d7a35d6ff99:0x9eae08b73bf3f4df!8m2!3d12.6865306!4d108.038766!16s%2Fg%2F11fsjhqr51?hl=vi-VN&entry=ttu">
                <Image
                  src="/images/frame.png"
                  width="40px"
                  height="40px"
                  alt=""
                />
              </Link>
            </Tooltip>
            <Stack>
              <Text marginTop="3rem !important" variant="h4">
                {t("address")}
              </Text>
              <Text variant="h7">
                102 Nguyễn Trãi, Thành Công, Buôn Ma Thuột
              </Text>
            </Stack>
          </Flex>
        </Flex>
      </Stack>
      <Stack alignItems="center" marginTop="5rem">
        <iframe
          title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.411612459367!2d108.03619107605478!3d12.686535821062035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31721d7a35d6ff99%3A0x9eae08b73bf3f4df!2zMTAyIE5ndXnhu4VuIFRyw6NpLCBUaMOgbmggQ8O0bmcsIFRow6BuaCBwaOG7kSBCdcO0biBNYSBUaHXhu5l0LCDEkOG6r2sgTOG6r2ssIFZp4buHdCBOYW0!5e0!3m2!1svi!2sus!4v1686738448244!5m2!1svi!2sus"
          height="300px"
          width="900px"
          loading="lazy"
        />
      </Stack>
    </Flex>
  );
}

export default Contact;
