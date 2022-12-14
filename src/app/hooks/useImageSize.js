import { useMediaQuery } from "usehooks-ts";

export const useImageSize = () => {
  const isMobile = useMediaQuery("(min-width: 639px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return isMobile ? "mobile" : isDesktop ? "desktop" : "tablet";
};
