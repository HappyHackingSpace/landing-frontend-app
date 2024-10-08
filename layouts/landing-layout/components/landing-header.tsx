"use client";
import * as React from "react";
import Link from "next/link";
import ThemeSwitcher from "@hhs/components/custom/theme-switcher";
import useBorderBottomAnimation from "@hhs/hooks/useBorderBottomAnimation";
import { Button } from "@hhs/components/shadcn/button";
import Image from "next/image";
import { SITE } from "@hhs/constants/metadata";
import { NAV_ITEMS } from "@hhs/constants/layout";
import { usePathname } from "next/navigation";

const LandingHeader = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-end justify-between gap-4">
      <div className="px-4 space-y-1">
        <Link href="/" className="flex items-center gap-2 px-2">
          <Image
            src="/assets/hhs.avif"
            width={40}
            height={40}
            alt={SITE.title}
          />
          <span className="font-bold w-44">{SITE.title}</span>
        </Link>
        <nav className="flex items-center gap-2 flex-wrap grow h-10">
          {NAV_ITEMS.map((item) => (
            <Button
              variant="ghost"
              asChild
              key={item.label}
              className="capitalize relative text-base px-2"
            >
              <Link href={item.href}>
                {item.label}
                {useBorderBottomAnimation(item.href === pathname, "header-nav")}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
      <ThemeSwitcher />
    </header>
  );
};

export default LandingHeader;
