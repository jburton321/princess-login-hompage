export function SiteHeader() {
  return (
    <header className="relative z-30 shrink-0 bg-white">
      <div className="mx-auto flex max-w-[100vw] items-center justify-between">
        <div className="flex min-w-0 shrink-0 items-center">
          <img
            src="/princess-promotions-logo.png"
            alt="Princess Promotions"
            className="site-header-logo"
            fetchPriority="high"
          />
        </div>
        <div className="flex shrink-0 items-center pr-4 sm:pr-8 lg:pr-10">
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-full border-0 bg-neutral-100 transition-colors hover:bg-[var(--pcl-pink-surface-hover)] sm:size-9"
            aria-label="United States — region or language"
          >
            <span className="text-base leading-none sm:text-lg" aria-hidden>
              🇺🇸
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
