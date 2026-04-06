import type { Metadata, Viewport } from "next";
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redHatText = Red_Hat_Text({
  variable: "--font-pcl-text",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-pcl-display",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

/** Aligned with https://www.princesspromotions.com/ initial HTML meta (title, description, viewport, theme-color, robots). */
export const metadata: Metadata = {
  title: "Princess Promotions",
  description:
    "Exceptional savings on our curated collection of travel, leisure, and lifestyle products and services is only a few steps away!",
  robots: {
    index: true,
    follow: true,
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
  themeColor: "#00538B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${redHatText.variable} ${redHatDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
