import type { Metadata, Viewport } from "next";
import { geistMono, geistSans } from "@hhs/assets/fonts";
import ThemeProvider from "@hhs/providers/theme-provider";
import { SITE, SOCIALS } from "@hhs/constants/metadata";
import { ChildrenProps } from "@hhs/types/layout-props";
import "@hhs/assets/styles/globals.css";

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
  other: {
    pinterest: "nopin",
  },
};
