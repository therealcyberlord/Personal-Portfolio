import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll position on route change (HashRouter keeps it otherwise). */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
