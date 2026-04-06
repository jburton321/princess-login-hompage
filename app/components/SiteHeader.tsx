import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="relative z-30 shrink-0 border-t-[3px] border-[#3e2b2e] border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-14 max-w-[100vw] items-center justify-between">
        <div className="flex min-w-0 shrink-0 items-center">
          <Image
            src="/princess-promotions-logo.png"
            alt="Princess Promotions"
            width={673}
            height={184}
            className="block h-14 w-auto max-h-14 object-contain object-left"
            priority
          />
        </div>
        <div className="flex shrink-0 items-center pr-4 sm:pr-8 lg:pr-10">
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 transition-colors hover:border-[var(--pcl-hover-accent)] hover:bg-[var(--pcl-pink-surface-hover)] sm:size-9"
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
