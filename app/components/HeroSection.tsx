"use client";

import { HeroBackgroundVideo } from "./HeroBackgroundVideo";

/**
 * Full left column: looping background video + scrim + headline copy.
 * Client-only because video playback runs in the browser.
 */
export function HeroSection() {
  return (
    <section
      className="relative isolate flex min-h-[28rem] w-full flex-1 flex-col justify-center overflow-hidden sm:min-h-[38vh] lg:min-h-0 lg:max-w-[50%]"
      aria-labelledby="hero-heading"
    >
      <HeroBackgroundVideo />

      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-black/55 via-black/25 to-black/35"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center px-6 py-10 sm:px-12 sm:py-12">
        <div className="flex w-full shrink-0 justify-center">
          <div className="flex w-full min-w-0 max-w-md shrink-0 flex-col items-start text-left">
            <h1
              id="hero-heading"
              className="font-pcl-display text-4xl font-black leading-[1.1] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-5xl lg:leading-[1.08] xl:text-[3rem]"
            >
              Welcome to Princess Promotions
            </h1>
            <p className="mt-6 max-w-prose text-lg font-semibold leading-snug text-white sm:text-xl sm:leading-snug">
              Access your travel benefits, review your package, and get the support you need for your next experience.
            </p>
            <p className="mt-5 max-w-prose text-sm font-normal leading-relaxed text-white/75 sm:text-[0.9375rem]">
              Princess Promotions supports guests who have purchased promotional travel packages that may include future
              cruise credits, hotel benefits, and other travel-related offers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
