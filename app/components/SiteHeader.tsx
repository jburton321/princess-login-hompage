import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="relative z-30 shrink-0 border-t-[3px] border-[#3e2b2e] bg-[#113388]">
      <div className="mx-auto flex h-14 max-w-[100vw] items-center justify-between px-5 sm:px-8 lg:px-10">
        <div className="flex min-w-0 items-center">
          <Image
            src="/princess-promotions-logo.png"
            alt="Princess Promotions"
            width={673}
            height={184}
            className="h-9 w-auto max-w-[min(100%,16rem)] object-contain object-left sm:h-10 sm:max-w-[18rem]"
            priority
          />
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
