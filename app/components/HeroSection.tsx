"use client";

import { HeroBackgroundVideo } from "./HeroBackgroundVideo";

/**
 * Full left column: looping background video only (no scrim, no overlay copy).
 * Client-only because video playback runs in the browser.
 */
export function HeroSection() {
  return (
    <section
      className="relative isolate flex min-h-[28rem] w-full flex-1 flex-col overflow-hidden sm:min-h-[38vh] lg:min-h-0 lg:max-w-[50%]"
      aria-label="Princess Promotions"
    >
      <HeroBackgroundVideo />
    </section>
  );
}
