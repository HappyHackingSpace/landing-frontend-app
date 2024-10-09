import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@hhs/components/shadcn/tooltip";
import { FOOTER, SOCIAL_LINKS } from "@hhs/constants/layout";
import Link from "next/link";

function LandingFooter() {
  return (
    <footer className="flex items-center justify-between flex-wrap md:pl-4 gap-2 text-slate-500 text-xs">
      <p>{FOOTER.copyRight}</p>
      <div className="flex gap-3 md:gap-4 mx-center">
        {SOCIAL_LINKS.map(({ href, icon, tooltip }) => (
          <TooltipProvider key={href}>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={href}
                  className="hover:text-foreground duration-200 transition-colors border size-5 flex items-center justify-center"
                  target="_blank"
                >
                  {icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </footer>
  );
}

export default LandingFooter;
