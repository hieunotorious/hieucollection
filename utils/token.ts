export const setTokens = async (
  accessToken: string,
  expired: string,
  refreshToken: string
) => {
  //only in browser
  if (typeof window === "undefined") return;
  await localStorage.setItem("access_token", accessToken);
  await localStorage.setItem("expired", expired);
  await localStorage.setItem("refresh_token", refreshToken);
};
