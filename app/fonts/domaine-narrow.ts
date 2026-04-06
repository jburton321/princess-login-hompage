import localFont from "next/font/local";

/**
 * Domaine Display Narrow — OTFs live next to this file:
 * `app/fonts/domaine-display-narrow/*.otf`
 * (next/font + Turbopack won’t resolve fonts under `public/`.)
 */
export const domaineDisplayNarrow = localFont({
  src: [
    { path: "./domaine-display-narrow/DomaineDispNar-Regular.otf", weight: "400", style: "normal" },
    { path: "./domaine-display-narrow/DomaineDispNar-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "./domaine-display-narrow/DomaineDispNar-Medium.otf", weight: "500", style: "normal" },
    { path: "./domaine-display-narrow/DomaineDispNar-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "./domaine-display-narrow/DomaineDispNar-Semibold.otf", weight: "600", style: "normal" },
    { path: "./domaine-display-narrow/DomaineDispNar-SemiboldItalic.otf", weight: "600", style: "italic" },
    { path: "./domaine-display-narrow/DomaineDispNar-Bold.otf", weight: "700", style: "normal" },
    { path: "./domaine-display-narrow/DomaineDispNar-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "./domaine-display-narrow/DomaineDispNar-Extrabold.otf", weight: "800", style: "normal" },
    { path: "./domaine-display-narrow/DomaineDispNar-ExtraboldItalic.otf", weight: "800", style: "italic" },
    { path: "./domaine-display-narrow/DomaineDispNar-Black.otf", weight: "900", style: "normal" },
    { path: "./domaine-display-narrow/DomaineDispNar-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-pcl-display",
  display: "swap",
});
