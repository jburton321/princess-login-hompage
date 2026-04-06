function WaveMark() {
  return (
    <div className="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-white/95 bg-white/10 sm:size-10">
      <svg viewBox="0 0 32 32" className="size-[1.35rem] text-white sm:size-6" fill="none" aria-hidden>
        <path
          d="M4 20c2.5-3 5.5-3 8 0s5.5 3 8 0 5.5-3 8 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 24c2.5-3 5.5-3 8 0s5.5 3 8 0 5.5-3 8 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={0.9}
        />
      </svg>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-30 shrink-0 border-t-[3px] border-[#3e2b2e] bg-[#113388]">
      <div className="mx-auto flex h-14 max-w-[100vw] items-center justify-between px-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <WaveMark />
          <div className="text-white">
            <div className="font-princess-serif text-lg font-semibold leading-none tracking-wide sm:text-xl">
              PRINCESS
            </div>
            <div className="mt-1 font-sans text-[0.55rem] font-medium uppercase tracking-[0.28em] text-white/95 sm:text-[0.6rem]">
              PROMOTIONS
            </div>
          </div>
        </div>
        <button
          type="button"
          className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/20 sm:size-9"
          aria-label="United States — region or language"
        >
          <span className="text-base leading-none sm:text-lg" aria-hidden>
            🇺🇸
          </span>
        </button>
      </div>
    </header>
  );
}
