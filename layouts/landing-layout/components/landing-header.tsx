"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@hhs/components/shadcn/drawer";
import Link from "next/link";
import { Menu } from "lucide-react";
import { GradientHeading } from "@hhs/components/custom/gradient-heading";
import { Button } from "@hhs/components/shadcn/button";
import { NAV_ITEMS } from "@hhs/constants/layout";
import ThemeSwitcher from "@hhs/components/custom/theme-switcher";
import Image from "next/image";
import { SITE } from "@hhs/constants/metadata";
import { usePathname } from "next/navigation";
import { cn } from "@hhs/utils/cn";
import { motion } from "framer-motion";

const LandingHeader = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-50 bg-background rounded-md shadow-sm hover:shadow-none transition-colors duration-200 border">
      {/* desktop */}
      <div className="justify-between items-center shrink-0 hidden md:flex px-2 h-12">
        <Link href="/">
          <Image
            src="/assets/hhs.avif"
            width={36}
            height={36}
            alt={SITE.title}
          />
        </Link>
        <nav className="flex items-center justify-items-center gap-2 h-full">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              className={cn(
                "relative h-full px-4 flex items-center justify-center transition-all duration-200",
                pathname === item.href
                  ? "text-primary"
                  : "hover:text-primary/50 text-primary/60"
              )}
              href={item.href}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <span>{item.label}</span>
              {pathname === item.href && (
                <motion.span
                  layoutId="bubble"
                  initial={{ y: "calc(100%)" }}
                  className="absolute inset-0 top-[calc(100%)] z-20 h-[1px] w-full rounded-full bg-gradient-to-r from-transparent dark:via-indigo-500 via-indigo-600 to-transparent"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </nav>
        <ThemeSwitcher />
      </div>

      {/* mobile */}
      <div className="flex justify-between md:hidden p-1">
        <Drawer>
          <DrawerTrigger asChild>
            <Button size="icon" variant="outline">
              <Menu size={20} className="text-gray-500" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="min-h-80">
            <div className="grid gap-4 p-6 pt-8">
              <div className="flex items-center gap-2 border-b pb-4">
                <Image
                  src="/assets/hhs.avif"
                  width={24}
                  height={24}
                  alt={SITE.title}
                />
                <span className="sr-only">HHS Community Logo</span>
                <GradientHeading
                  variant="default"
                  weight="semi"
                  size="xs"
                  className="text-center cursor-pointer"
                >
                  {SITE.title}
                </GradientHeading>
              </div>

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

        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default LandingHeader;
