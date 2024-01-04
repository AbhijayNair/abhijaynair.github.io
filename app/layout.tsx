import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhijay Nair",
  description: "Get to know more about Jay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Abhijay Nair</title>
        <meta property="og:title" content="Jay Nair" />
        <meta property="og:description" content="Get to know more about Jay" />
        <meta property="description" content="Get to know more about Jay" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
