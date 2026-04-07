import type { Metadata, Viewport } from "next";
import { Spline_Sans } from "next/font/google";
import "./globals.css";

const splineSans = Spline_Sans({
  variable: "--font-pcl-text",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const splineSansDisplay = Spline_Sans({
  variable: "--font-pcl-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${splineSans.variable} ${splineSansDisplay.variable} h-full antialiased`}
    >
      <body className="mx-auto min-h-full w-full max-w-[1440px] font-sans shadow-[0_4px_24px_4px_rgba(0,0,0,0.5)]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
