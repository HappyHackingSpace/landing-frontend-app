import * as React from "react";
import { usePathname } from "next/navigation";
import { allLandings } from "@hhs/.content-collections/generated";

const useLandingNavigation = () => {
  const pathname = usePathname();

  return React.useMemo(
    () =>
      allLandings.map((item) => {
        const navPath = item._meta.path.split("/").slice(1).join("/");
        const href = `/${navPath}`;

        return {
          label: navPath === "" ? "Home" : navPath,
          active: href === pathname,
          href,
        };
      }),
    [pathname]
  );
};

export default useLandingNavigation;
