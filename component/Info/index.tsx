import { Stack, Tooltip } from "@chakra-ui/react";
import { useResponsive } from "app/hooks/useResponsive";
import Link from "next/link";
import Container from "../Container";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import COLOR from "app/constant/color";
const Content1 = () => {
  const { isMobile } = useResponsive();

  return (
    <Container>
      <Stack
        sx={{
          border: `1px solid ${COLOR.tertiary}`,
          borderRadius: "50px",
          position: "fixed",
          right: isMobile ? "5px" : "10px",
          top: "30%",
          zIndex: "99",
          padding: isMobile ? "10px 5px" : "30px 15px",
        }}
      >
        <Stack
          sx={{
            ".icon": {
              height: "30px",
              width: "30px",
              backgroundColor: COLOR.tertiary,
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <Tooltip label="hieumn2001@gmail.com" placement="top">
            <Stack className="icon">
              <Link href="mailto:hieumn2001@gmail.com">
                <EmailIcon style={{ color: COLOR.white }} />
              </Link>
            </Stack>
          </Tooltip>

          <Tooltip label="0912590467" placement="top">
            <Stack className="icon">
              <Link href="tel:0912590467">
                <LocalPhoneIcon style={{ color: COLOR.white }} />
              </Link>
            </Stack>
          </Tooltip>
          <Tooltip
            label="102 Nguyễn Trãi, Thành Công, Thành phố Buôn Ma Thuột, Đắk Lắk"
            placement="top"
          >
            <Stack className="icon">
              <Link href="https://www.google.com/maps/place/102+Nguy%E1%BB%85n+Tr%C3%A3i,+Th%C3%A0nh+C%C3%B4ng,+Th%C3%A0nh+ph%E1%BB%91+Bu%C3%B4n+Ma+Thu%E1%BB%99t,+%C4%90%E1%BA%AFk+L%E1%BA%AFk,+Vi%E1%BB%87t+Nam/@12.6865306,108.0361911,17z/data=!3m1!4b1!4m6!3m5!1s0x31721d7a35d6ff99:0x9eae08b73bf3f4df!8m2!3d12.6865306!4d108.038766!16s%2Fg%2F11fsjhqr51?hl=vi-VN&entry=ttu">
                <PlaceIcon style={{ color: COLOR.white }} />
              </Link>
            </Stack>
          </Tooltip>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Content1;
