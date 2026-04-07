import type { Metadata, Viewport } from "next";
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
    <html lang="en" className="h-full antialiased">
      <body className="mx-auto min-h-full w-full max-w-[1440px] font-sans shadow-[0_4px_24px_4px_rgba(0,0,0,0.5)]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
