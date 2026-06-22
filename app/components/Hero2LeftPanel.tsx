import { HeroBackgroundVideo } from "./HeroBackgroundVideo";

/**
 * Hero2 left panel — cruise imagery, gradient, and looping video overlay.
 */
export function Hero2LeftPanel() {
  return (
    <div className="sticky top-0 isolate flex h-[100svh] min-h-[32rem] flex-1 flex-col justify-center overflow-hidden lg:relative lg:top-auto lg:h-auto lg:min-h-0 lg:max-w-[50%]">
      {/* ── Multi-layer gradient overlay for depth ── */}
      <div
        className="absolute inset-0 z-[1]"
        aria-hidden
        style={{
          background:
            "linear-gradient(to top, rgba(0,43,73,0.92) 0%, rgba(0,53,139,0.65) 40%, rgba(0,83,139,0.35) 70%, rgba(0,53,139,0.50) 100%)",
        }}
      />

      {/* ── Looping video overlay (public/hero-loop.mp4) ── */}
      <HeroBackgroundVideo className="pointer-events-none absolute inset-0 z-[2] size-full object-cover object-[center_40%]" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-8 flex flex-col items-center gap-8 self-center px-8 py-12 text-center sm:mx-16 sm:px-12 sm:py-14 lg:max-w-[34rem] lg:py-16">
        <h2
          id="hero2-left-heading"
          className="font-pcl-display text-4xl font-black leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(2,53,150,0.28)] sm:text-5xl lg:text-[3.25rem]"
        >
          Welcome to <span className="whitespace-nowrap">Princess Promotions</span>
        </h2>

        <p className="max-w-[26rem] text-base font-medium leading-relaxed text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.22)] sm:text-lg sm:leading-relaxed">
          Access your travel benefits, review your package,
          <br />
          and get the support you need for your next experience.
        </p>

        <div className="flex w-full max-w-[26rem] flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#member-login"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--pcl-pink)] px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white no-underline shadow-[0_10px_28px_rgba(230,0,96,0.32)] transition-[transform,filter] hover:-translate-y-0.5 hover:brightness-105"
          >
            Login
          </a>
          <a
            href="#learn-more"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white bg-white/8 px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white no-underline backdrop-blur-[2px] transition-[background-color,color,transform] hover:-translate-y-0.5 hover:bg-white hover:text-[var(--pcl-blue)]"
          >
            Learn More
          </a>
        </div>
      </div>

    </div>
  );
}
