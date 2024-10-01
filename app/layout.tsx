import type { Metadata } from "next";
import { geistMono, geistSans } from "@hhs/assets/fonts";

import "@hhs/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Happy Hacking Space",
  description:
    "Values exploration, curiosity, and empowerment. Rejects scarcity and believes in an abundant economy through collaboration and shared imagination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
