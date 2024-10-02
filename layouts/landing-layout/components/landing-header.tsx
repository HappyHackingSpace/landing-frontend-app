import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@hhs/components/shadcn/navigation-menu";
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

const LandingHeader = () => {
  return (
    <header className="sticky top-4 z-50 bg-background rounded-md p-1 md:p-2 shadow-sm hover:shadow-none transition-colors duration-200 border">
      {/* desktop */}
      <div className="justify-between items-center shrink-0 hidden md:flex">
        <Link href="/">
          <Image
            src="/assets/hhs.avif"
            width={40}
            height={40}
            alt="Happy Hacking Space"
          />
        </Link>
        <div className="flex items-center gap-12">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_ITEMS.map((item) => (
                <Link key={item.label} legacyBehavior passHref href={item.href}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeSwitcher />
        </div>
      </div>

      {/* mobile */}
      <div className="flex justify-between md:hidden ">
        <Drawer>
          <DrawerTrigger asChild>
            <Button size="icon" variant="outline">
              <Menu size={20} className="text-gray-500" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="min-h-80">
            <div className="grid gap-4 p-6 pt-8">
              <DrawerClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 border-b pb-4"
                >
                  <Image
                    src="/assets/hhs.avif"
                    width={24}
                    height={24}
                    alt="Happy Hacking Space"
                  />
                  <span className="sr-only">HHS Community Logo</span>
                  <GradientHeading
                    variant="default"
                    weight="semi"
                    size="xs"
                    className="text-center cursor-pointer"
                  >
                    Happy Hacking Space
                  </GradientHeading>
                </Link>
              </DrawerClose>

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

        {/* <Logo /> */}
      </div>
    </header>
  );
};

export default LandingHeader;
