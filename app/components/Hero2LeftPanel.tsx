import Image from "next/image";

/**
 * Hero2 left panel — cruise imagery + gradient overlay (no video).
 */
export function Hero2LeftPanel() {
  return (
    <div className="relative isolate flex min-h-[32rem] flex-1 flex-col justify-end overflow-hidden lg:min-h-0 lg:max-w-[50%]">
      {/* ── Background cruise ship image ── */}
      <Image
        src="/cruise-lines/ship-primary.png"
        alt="Princess Cruises ship at sea"
        fill
        className="z-0 object-cover object-[center_40%]"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      {/* ── Multi-layer gradient overlay for depth ── */}
      <div
        className="absolute inset-0 z-[1]"
        aria-hidden
        style={{
          background:
            "linear-gradient(to top, rgba(0,43,73,0.92) 0%, rgba(0,53,139,0.65) 40%, rgba(0,83,139,0.35) 70%, rgba(0,53,139,0.50) 100%)",
        }}
      />

      {/* ── Decorative accent line ── */}
      <div
        className="absolute left-0 top-0 z-[2] h-1 w-full"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--pcl-gold) 20%, var(--pcl-pink) 50%, var(--pcl-gold) 80%, transparent 100%)",
        }}
      />

      {/* ── Subtle pattern overlay ── */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col gap-8 px-8 pb-12 pt-16 sm:px-16 sm:pb-16 lg:pb-20">
        {/* Badge */}
        <div className="flex items-center gap-2.5">
          <span
            className="inline-block size-2 rounded-full"
            style={{ backgroundColor: "var(--pcl-gold)" }}
            aria-hidden
          />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Princess Promotions
          </span>
        </div>

        <h2
          id="hero2-left-heading"
          className="font-pcl-display text-4xl font-black leading-[1.08] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-[3.25rem]"
        >
          Your Next{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--pcl-gold), #e8c88a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Voyage
          </span>{" "}
          Awaits
        </h2>

        <p className="max-w-[26rem] text-base font-medium leading-relaxed text-white/85 sm:text-lg sm:leading-relaxed">
          Access your travel benefits, review your package, and get the support
          you need for your next cruise experience.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2.5">
          {["Cruise Credits", "Hotel Benefits", "Travel Support"].map(
            (label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 backdrop-blur-sm"
              >
                <span
                  className="inline-block size-1.5 rounded-full"
                  style={{ backgroundColor: "var(--pcl-gold)" }}
                  aria-hidden
                />
                {label}
              </span>
            )
          )}
        </div>
      </div>

      {/* ── Bottom decorative gold border ── */}
      <div
        className="absolute bottom-0 left-0 z-[3] h-[3px] w-full"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--pcl-gold) 30%, var(--pcl-gold) 70%, transparent 100%)",
        }}
      />
    </div>
  );
}
