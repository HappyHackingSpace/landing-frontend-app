import type { Viewport } from "next";
import { geistMono, geistSans } from "@hhs/assets/fonts";
import ThemeProvider from "@hhs/providers/theme-provider";
import { SITE } from "@hhs/constants/metadata";
import "@hhs/assets/styles/globals.css";
import ServiceWorkerRegister from "@hhs/components/custom/ServiceWorkerRegister";
import { metadata } from "./metadata";

export { metadata };

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <ServiceWorkerRegister />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  colorScheme: SITE.colorScheme as Viewport["colorScheme"],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
