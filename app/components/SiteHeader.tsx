import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="relative z-30 shrink-0 border-t-[3px] border-[#3e2b2e] bg-[#113388]">
      <div className="mx-auto flex h-14 max-w-[100vw] items-stretch justify-between">
        <div className="relative h-full min-h-0 min-w-0 shrink">
          <Image
            src="/princess-promotions-logo.png"
            alt="Princess Promotions"
            width={673}
            height={184}
            className="block h-full w-auto max-w-none object-contain object-left"
            priority
          />
        </div>
        <div className="flex shrink-0 items-center pr-4 sm:pr-8 lg:pr-10">
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/20 sm:size-9"
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
