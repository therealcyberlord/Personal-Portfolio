import { useEffect } from "react";
import { SITE } from "@/data/site";

const DEFAULT_TITLE = `${SITE.name} · Software Engineer & AI Researcher`;

/** Sets the document title for the current route; omit `page` for the default site title. */
const usePageTitle = (page?: string) => {
  useEffect(() => {
    document.title = page ? `${page} · ${SITE.name}` : DEFAULT_TITLE;
  }, [page]);
};

export default usePageTitle;
