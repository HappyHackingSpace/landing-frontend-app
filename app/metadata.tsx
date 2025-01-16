import { Metadata } from "next";
import { SITE, SOCIALS } from "@hhs/constants/metadata";

export const metadata: Metadata = {
    metadataBase: new URL(`${SITE.url}`),
    robots: {
      index: true,
      follow: true,
    },
    title: {
      default: SITE.title,
      template: `%s — ${SITE.title}`,
    },
    description: SITE.description,
    keywords: [
      "happy hacking space",
      "happy hacking",
      "hhs",
      "community",
      "diyarbakir",
    ],
    openGraph: {
      title: {
        default: SITE.title,
        template: `%s — ${SITE.title}`,
      },
      description: SITE.description,
      type: "website",
      url: SITE.url,
      siteName: SITE.title,
      locale: "en_IE",
    },
    alternates: {
      canonical: "/",
    },
    twitter: {
      card: "summary_large_image",
      site: `@${SOCIALS.twitter.username}`,
      creator: `@${SOCIALS.twitter.username}`,
    },
    icons: {
      icon: "/favicon.ico"
    },
    other: {
      pinterest: "nopin",
    },
  };
  