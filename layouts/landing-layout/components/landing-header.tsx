"use client";
import * as React from "react";
import Link from "next/link";
import ThemeSwitcher from "@hhs/components/custom/theme-switcher";
import { Button } from "@hhs/components/shadcn/button";
import { SITE } from "@hhs/constants/metadata";
import { NAV_ITEMS } from "@hhs/constants/layout";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MenuIcon, ChevronDown } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@hhs/components/shadcn/drawer";
import BannerLastEvent from "@hhs/components/custom/banner-last-event";
import Logo from "@hhs/components/custom/Logo";

const NavItem = ({ item, isMobile = false }: { item: any; isMobile?: boolean }) => {
  const pathname = usePathname();

  if (item.items) {
    return isMobile ? (
      <>
        <div className="flex w-full items-center py-1 text-lg font-semibold">
          {item.label}
        </div>
        <div className="ml-4 grid gap-2">
          {item.items.map((subItem: any) => (
            <DrawerClose asChild key={subItem.label}>
              <Link
                className="flex w-full items-center py-1 text-lg"
                href={subItem.href}
              >
                {subItem.label}
              </Link>
            </DrawerClose>
          ))}
        </div>
      </>
    ) : (
      <div className="group relative">
        <Button
          variant="ghost"
          className="capitalize relative text-base px-2 group-hover:bg-accent z-20"
        >
          {item.label}
          <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
          {item.items.some((subItem: any) => pathname === subItem.href) && (
            <motion.div
              layoutId="landing-header-nav"
              className="absolute inset-0 top-[calc(100%)] z-20 h-[1px] w-full bg-primary"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
              }}
            />
          )}
        </Button>
        <div className="invisible group-hover:visible absolute left-0 top-full z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
          {item.items.map((subItem: any) => (
            <Link
              key={subItem.label}
              href={subItem.href}
              className="relative flex w-full select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return isMobile ? (
    <DrawerClose asChild>
      <Link
        className="flex w-full items-center py-1 text-lg font-semibold"
        href={item.href}
      >
        {item.label}
      </Link>
    </DrawerClose>
  ) : (
    <Button
      variant="ghost"
      asChild
      className="capitalize relative text-base px-2"
    >
      <Link href={item.href}>
        {item.label}
        {pathname === item.href && (
          <motion.div
            layoutId="landing-header-nav"
            className="absolute inset-0 top-[calc(100%)] z-20 h-[1px] w-full bg-primary"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6,
            }}
          />
        )}
      </Link>
    </Button>
  );
};

const LandingHeader = () => {
  return (
    <>
      <BannerLastEvent />
      <header className="flex items-center md:items-end justify-between gap-4 flex-wrap relative z-10">
        <div className="flex-wrap flex gap-4 md:block md:px-4 space-y-1">
          <Link
            href="/"
            className="flex items-center gap-2 md:px-2 order-2 md:order:1"
          >
            <Logo />
          </Link>
          {/* Desktop */}
          <nav className="hidden md:flex items-center flex-wrap grow h-10">
            {NAV_ITEMS.map((item, index) => (
              <React.Fragment key={item.label}>
                <NavItem item={item} />
                {index < NAV_ITEMS.length - 1 && (
                  <span className="mx-2 text-gray-500">|</span>
                )}
              </React.Fragment>
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
            <DrawerContent className="min-h-80 border-t rounded-none">
              <div className="grid gap-4 p-6 pt-8">
                {NAV_ITEMS.map((item) => (
                  <NavItem key={item.label} item={item} isMobile />
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <ThemeSwitcher />
      </header>
    </>
  );
};

export default LandingHeader;
