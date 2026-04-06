export function SiteHeader() {
  return (
    <header className="relative z-30 shrink-0 bg-white shadow-[0_10px_30px_rgba(0,43,73,0.08)]">
      <div className="flex w-full max-w-none items-center justify-between">
        <div className="flex min-w-0 shrink-0 items-center">
          <img
            src="/princess-promotions-logo.png"
            alt="Princess Promotions"
            className="site-header-logo"
            fetchPriority="high"
          />
        </div>
        <div className="flex shrink-0 items-center">
          <button
            type="button"
            className="flex items-center justify-center border-0 bg-transparent p-0 leading-none"
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
