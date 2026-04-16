import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { AnchorScrollEnhancer } from "./components/AnchorScrollEnhancer";
import "./globals.css";

const siteTitle = "Princess Promotions | Member Login and Travel Benefits Access";
const siteDescription =
  "Exceptional savings on our curated collection of travel, leisure, and lifestyle products and services is only a few steps away!";
const socialImageUrl = "/social-share.png";
const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
  process.env.VERCEL_URL?.trim() ||
  "https://princess-login-hompage.vercel.app";
const siteUrl = resolvedSiteUrl.startsWith("http")
  ? resolvedSiteUrl
  : `https://${resolvedSiteUrl}`;

const proximaNova = localFont({
  src: [
    {
      path: "../public/fonts/proxima-nova/ProximaNova-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/proxima-nova/ProximaNova-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/proxima-nova/ProximaNova-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/proxima-nova/ProximaNova-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/proxima-nova/ProximaNova-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/proxima-nova/ProximaNova-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/proxima-nova/ProximaNova-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/proxima-nova/ProximaNova-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-pcl-text",
  display: "swap",
});

const domaineDisplay = localFont({
  src: [
    {
      path: "../public/fonts/domaine-display/DomaineDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/domaine-display/DomaineDisplay-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/domaine-display/DomaineDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/domaine-display/DomaineDisplay-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/domaine-display/DomaineDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/domaine-display/DomaineDisplay-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-pcl-display",
  display: "swap",
});

/** Aligned with https://www.princesspromotions.com/ initial HTML meta (title, description, viewport, theme-color, robots). */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: siteTitle,
    type: "website",
    images: [
      {
        url: socialImageUrl,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImageUrl],
  },
  /** Matches https://www.princesspromotions.com/ — `<link rel="icon" href="/favicon.ico" />` */
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
  },
};

/** PCL primary blue — matches browser chrome to brand when supported. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#023596",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${proximaNova.variable} ${domaineDisplay.variable} h-full antialiased`}
    >
      <body className="mx-auto min-h-full w-full max-w-[1440px] font-sans shadow-[0_4px_24px_4px_rgba(0,0,0,0.5)]" suppressHydrationWarning>
        <AnchorScrollEnhancer />
        {children}
      </body>
    </html>
  );
}
