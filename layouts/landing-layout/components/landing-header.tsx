"use client";
import * as React from "react";
import Link from "next/link";
import ThemeSwitcher from "@hhs/components/custom/theme-switcher";
import { cn } from "@hhs/utils/cn";
import useLandingNavigation from "@hhs/hooks/useLandingNavigation";

const LandingHeader = () => {
  return (
    <header className="flex items-center justify-between gap-4">
      <nav className="flex items-center gap-2 flex-wrap grow h-10 px-4">
        {useLandingNavigation().map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn("capitalize", item.active && "text-orange-500")}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <ThemeSwitcher />
    </header>
  );
};

export default LandingHeader;
