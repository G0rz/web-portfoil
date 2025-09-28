import type {Metadata} from "next";
import {Montserrat, Open_Sans, Roboto} from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";
import NavigationBar from "@/components/navigation-bar";
import React from "react";

const montserrat = Montserrat({
    variable: "--font-family",
  subsets: ["latin"],
});

const roboto = Roboto({
    variable: "--font-family",
  subsets: ["latin"],
});

const openSans = Open_Sans({
    variable: "--font-family",
    subsets: ["latin"],
});

const siteConfig = {
    name: "Leonardo Becerril | Software Engineer",
    description: "Portfolio of Leonardo Becerril, a passionate Software Engineer specializing in building modern web applications with Next.js, TypeScript, and Tailwind CSS.",
    url: "https://leonardobecerril.dev"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
    title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
      "Leonardo Becerril",
      "Software Engineer",
      "Web Developer",
      "Portfolio",
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Full-Stack Developer"
  ],
    authors: [{name: "Leonardo Becerril"}],
  creator: "Leonardo Becerril",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@xdeathzero",
  },
    icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${montserrat.variable} ${roboto.variable} ${openSans.variable} antialiased`}>
      <Providers>
          <NavigationBar/>
          {children}
      </Providers>
      </body>
    </html>
  );
}
