import Link from "next/link";
import { SOCIAL_LINKS } from "@hhs/constants/layout";
import { Heart } from "lucide-react";
import { GradientHeading } from "@hhs/components/custom/gradient-heading";
import ThemeSwitcher from "@hhs/components/custom/theme-switcher";
import Image from "next/image";

interface LandingFooterProps {}

function LandingFooter({}: LandingFooterProps) {
  return (
    <footer className="space-y-8 pt-6 p-2 border-t">
      <div className="grid md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <Link href="/">
              <Image
                src="/assets/hhs.avif"
                width={44}
                height={44}
                alt="Happy Hacking Space"
              />
            </Link>
            <div>
              <GradientHeading variant="default" weight="semi" size="md">
                Happy Hacking Space
              </GradientHeading>
              <Link
                target="_blank"
                href="https://github.com/HappyHackingSpace/landing-frontend-app"
                className="text-gray-500 hover:text-gray-700 duration-200 transition-colors"
              >
                <div className="flex items-center gap-1">
                  <Heart size={16} className="text-rose-500" />
                  <p className="text-xs cursor-pointer">Open source</p>
                </div>
              </Link>
            </div>
          </div>

          <p className="text-gray-500 text-sm text-balance">
            A nonprofit community driven by curiosity and exploration, rejecting
            the myth of scarcity, believing in an economy of abundance through
            collaboration and mutual support, while championing collective
            imagination and creative resilience.
          </p>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-500 hover:text-gray-700 duration-200 transition-colors"
                target="_blank"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  items-center justify-between gap-2 shrink-0 w-full">
        <p className="text-gray-400 text-xs">
          © 2024 HHS Community. All rights reserved.
        </p>

        <ThemeSwitcher />
      </div>
    </footer>
  );
}

export default LandingFooter;