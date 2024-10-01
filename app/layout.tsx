import type { Metadata, Viewport } from "next";
import { geistMono, geistSans } from "@hhs/assets/fonts";
import ThemeProvider from "@hhs/providers/theme-provider";

import "@hhs/assets/styles/globals.css";
import { ChildrenProps } from "@hhs/types/layout-props";

export const metadata: Metadata = {
  title: "Happy Hacking Space",
  description:
    "Values exploration, curiosity, and empowerment. Rejects scarcity and believes in an abundant economy through collaboration and shared imagination.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
