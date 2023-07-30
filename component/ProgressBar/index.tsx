import { Stack, Text } from "@chakra-ui/react";
import COLOR from "app/constant/color";
import { useResponsive } from "app/hooks/useResponsive";
import { useEffect, useState } from "react";

type ProgressBarProps = {
  isVisible?: boolean;
  title: string;
  progress: number;
};

const TIME = 3000;

const ProgressBar = ({
  isVisible = true,
  title,
  progress,
}: ProgressBarProps) => {
  const { isMobile } = useResponsive();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setPercent((prev) => prev + 1);

      if (percent >= progress) {
        clearInterval(interval);
      }
    }, (progress / TIME) * 1000);
    if (percent >= progress) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [percent, progress]);

  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Text
          variant={isMobile ? "h4_mobile" : "h4"}
          style={{
            color: COLOR.secondary,
            fontWeight: 700,
            fontFamily: "Balsamiq Sans",
          }}
          zIndex="1"
        >
          {title}
        </Text>
      </Stack>
      <Stack
        sx={{
          position: "relative",
          background: COLOR.bar,
          borderRadius: "8px",
        }}
        height="12px"
        spacing={0}
      >
        <Text
          variant={isMobile ? "h4_mobile" : "h4"}
          style={{
            color: COLOR.secondary,
            fontWeight: 400,
            fontFamily: "Balsamiq Sans",
            marginRight: "10rem",
            position: "absolute",
            transition: `all ${TIME}ms ease-in-out`,
            top: -30,
            left: isVisible ? `${progress}%` : 0,
          }}
        >
          {percent}%
        </Text>
        <Stack
          sx={{
            width: isVisible ? `${progress}%` : 0,
            height: "100%",
            background: COLOR.tertiary,
            borderRadius: "8px",
            transition: `all ${TIME}ms ease-in-out`,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default ProgressBar;
