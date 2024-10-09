"use client";
import * as React from "react";
import Link from "next/link";
import ThemeSwitcher from "@hhs/components/custom/theme-switcher";
import { Button } from "@hhs/components/shadcn/button";
import Image from "next/image";
import { SITE } from "@hhs/constants/metadata";
import { NAV_ITEMS } from "@hhs/constants/layout";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@hhs/components/shadcn/drawer";

const LandingHeader = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center md:items-end justify-between gap-4 flex-wrap ">
      <div className="flex-wrap flex gap-4 md:block md:px-4 space-y-1">
        <Link
          href="/"
          className="flex items-center gap-2 md:px-2 order-2 md:order:1"
        >
          <Image
            src="/assets/hhs.avif"
            width={40}
            height={40}
            alt={SITE.title}
          />
          <span className="font-bold w-44">{SITE.title}</span>
        </Link>
        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-2 flex-wrap grow h-10">
          {NAV_ITEMS.map((item) => (
            <Button
              variant="ghost"
              asChild
              key={item.label}
              className="capitalize relative text-base px-2"
            >
              <Link href={item.href}>
                {item.label}

                {pathname === item.href && (
                  <motion.div
                    layoutId="landing-header-nav"
                    initial={{ y: "calc(100%)" }}
                    className="absolute inset-0 top-[calc(100%)] z-20 h-[1px] w-full bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Mobile */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button size="icon" variant="outline" className="md:hidden">
              <MenuIcon size={20} className="text-gray-500" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="min-h-80 border-t rounded-none	">
            <div className="grid gap-4 p-6 pt-8">
              {NAV_ITEMS.map((item) => (
                <DrawerClose asChild key={item.label}>
                  <Link
                    className="flex w-full items-center py-1 text-lg font-semibold"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </DrawerClose>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <ThemeSwitcher />
    </header>
  );
};

export default LandingHeader;
