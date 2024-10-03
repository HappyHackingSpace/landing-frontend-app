import type { Metadata, Viewport } from "next";
import { geistMono, geistSans } from "@hhs/assets/fonts";
import ThemeProvider from "@hhs/providers/theme-provider";

import "@hhs/assets/styles/globals.css";
import { ChildrenProps } from "@hhs/types/layout-props";
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  SOCIALS,
} from "@hhs/constants/metadata";

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}`),
  robots: {
    index: true,
    follow: true,
  },
  title: {
    default: SITE_TITLE,
    template: `%s — ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "happy hacking space",
    "happy hacking",
    "hhs",
    "community",
    "diyarbakir",
  ],
  openGraph: {
    title: {
      default: SITE_TITLE,
      template: `%s — ${SITE_TITLE}`,
    },
    description: SITE_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: SITE_TITLE,
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
  other: {
    pinterest: "nopin",
  },
};
