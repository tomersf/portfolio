import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/react";
import { fontNotoSerif } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Tomer Shafir",
  description: "Tomer Shafir's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontNotoSerif}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
