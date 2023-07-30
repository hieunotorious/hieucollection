import { Stack, Text } from "@chakra-ui/react";
import "aos/dist/aos.css";
import COLOR from "app/constant/color";
import { useResponsive } from "app/hooks/useResponsive";
import Image from "next/image";

type ServiceProps = {
  title: string;
  src: string;
};

const ToyService = ({ title, src }: ServiceProps) => {
  const { isMobile } = useResponsive();

  return (
    <Stack
      className="box"
      sx={{
        border: `1px solid ${COLOR.bg}`,
        borderRadius: "5px",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "120px",
        width: "250px",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Stack
          className="image"
          sx={{
            cursor: "pointer",
            position: "relative",
            bg: COLOR.bg,
            height: "92px",
            width: "92px",
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",

            "&:hover": {
              "&:after": {
                animation: "spinAround 9s linear infinite",
                border: `2px dashed ${COLOR.primary}`,
              },
            },

            "&:after": {
              position: "absolute",
              width: " 100%",
              height: "100%",
              borderRadius: "50%",
              content: '""',
              boxSizing: "content-box",
              zIndex: 10,
              padding: 0,
              transition: "all 300ms ease-in-out",
            },
          }}
        >
          <Image src={src} width={60} height={40} alt={title} />
        </Stack>
      </Stack>
      <Text variant={isMobile ? "h4_mobile" : "h4"}>{title}</Text>
    </Stack>
  );
};

export default ToyService;
