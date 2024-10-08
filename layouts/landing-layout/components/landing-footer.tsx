import { FOOTER, SOCIAL_LINKS } from "@hhs/constants/layout";
import Link from "next/link";

function LandingFooter() {
  return (
    <footer className="flex items-center justify-between flex-wrap px-4 gap-2 text-slate-400 ">
      <p className="text-sm">{FOOTER.copyRight}</p>
      <div className="flex gap-3 md:gap-4 mx-center">
        {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="hover:text-foreground duration-200 transition-colors"
            target="_blank"
          >
            <Icon size={16} />
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default LandingFooter;
