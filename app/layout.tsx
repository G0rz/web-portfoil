import type {Metadata} from "next";
import {Montserrat, Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";
import NavigationBar from "@/components/NavigationBar";
import React from "react";
import {siteConfig} from "@/config/site";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
    variable: "--font-heading",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-body",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  metadataBase: new URL(siteConfig.url),
    title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
      "Leonardo Becerril",
      "Ingeniero en Sistemas Computacionales",
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
    <html lang="es">
    <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
    </head>
    <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
      <Providers>
          <NavigationBar/>
          {children}
          <Footer />
      </Providers>
      </body>
    </html>
  );
}
