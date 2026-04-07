function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-[var(--pcl-pink)]"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 shrink-0 bg-white/78 backdrop-blur-md shadow-[0_10px_30px_rgba(0,43,73,0.08)]">
      <div className="flex w-full max-w-none items-center justify-between gap-2 pr-3 sm:gap-4 sm:pr-6">
        <div className="flex min-w-0 shrink-0 items-center">
          <img
            src="/princess-promotions-logo.png"
            alt="Princess Promotions"
            className="site-header-logo"
            fetchPriority="high"
          />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-end">
          <div className="flex min-w-0 flex-col items-end gap-0.5 text-right sm:flex-row sm:items-center sm:gap-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[var(--pcl-blue)] whitespace-nowrap sm:text-sm sm:tracking-[0.12em]">
              Contact Us
            </p>
            <span className="hidden text-[var(--pcl-grey)] sm:inline" aria-hidden>
              |
            </span>
            <a
              href="tel:+18884030301"
              className="inline-flex min-w-0 items-center gap-1 text-[15px] font-semibold leading-5 text-[var(--pcl-blue)] no-underline whitespace-nowrap sm:gap-2 sm:text-2xl sm:leading-7"
            >
              <PhoneIcon />
              +1 888 403 0301
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
