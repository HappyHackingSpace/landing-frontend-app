"use client";
import * as React from "react";
import Link from "next/link";
import ThemeSwitcher from "@hhs/components/custom/theme-switcher";
import useLandingNavigation from "@hhs/hooks/useLandingNavigation";
import useBorderBottomAnimation from "@hhs/hooks/useBorderBottomAnimation";
import { Button } from "@hhs/components/shadcn/button";

const LandingHeader = () => {
  return (
    <header className="flex items-center justify-between gap-4">
      <nav className="flex items-center gap-2 flex-wrap grow h-10 px-4">
        {useLandingNavigation().map((item) => (
          <Button
            variant="ghost"
            asChild
            key={item.label}
            className="capitalize relative text-base px-2"
          >
            <Link href={item.href}>
              {item.label}
              {useBorderBottomAnimation(item.active, "landing-header")}
            </Link>
          </Button>
        ))}
      </nav>
      <ThemeSwitcher />
    </header>
  );
};

export default LandingHeader;
