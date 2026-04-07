import Image from "next/image";

const actionItems = [
  {
    title: "Access Account",
    subtitle: "Secure sign in for your Princess Promotions account.",
    icon: (
      <svg className="h-11 w-11" viewBox="0 0 48 48" fill="none" aria-hidden>
        <path
          d="M10 29h28M14 24.5h20l-2.2-6.1A3 3 0 0 0 28.98 16H19.02a3 3 0 0 0-2.82 2.4L14 24.5Zm3.5 4.5a2 2 0 1 1-4 0m17 0a2 2 0 1 1-4 0"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Review Benefits",
    subtitle: "See your included travel opportunities and related perks.",
    icon: (
      <svg className="h-11 w-11" viewBox="0 0 48 48" fill="none" aria-hidden>
        <path
          d="M10 39h28M14 39V18a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v21M19 23h.01M19 28h.01M24 23h.01M24 28h.01M29 23h.01M29 28h.01"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Understand how your package works",
    subtitle: "Get clarity on timelines, rules, and benefit details.",
    icon: (
      <svg className="h-11 w-11" viewBox="0 0 48 48" fill="none" aria-hidden>
        <path
          d="M13 14h22a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H20l-7 5v-8a3 3 0 0 1-3-3V17a3 3 0 0 1 3-3Zm6 8h10m-10 5h6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Get support when you need assistance",
    subtitle: "Reach out if you need help accessing or understanding your account.",
    icon: (
      <svg className="h-11 w-11" viewBox="0 0 48 48" fill="none" aria-hidden>
        <path
          d="M37 31.84V38a3 3 0 0 1-3.27 3A29.7 29.7 0 0 1 20.78 36.4a29.24 29.24 0 0 1-9.18-9.18A29.7 29.7 0 0 1 7 14.27 3 3 0 0 1 10 11h6.16a3 3 0 0 1 2.98 2.56c.18 1.35.5 2.67.95 3.93a3 3 0 0 1-.68 3.16l-2.6 2.3a24 24 0 0 0 8.88 8.88l2.3-2.6a3 3 0 0 1 3.16-.68c1.26.45 2.58.77 3.93.95A3 3 0 0 1 37 31.84Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

/**
 * Full-width explainer banner showing the main actions available on the site.
 */
export function WhatYouCanDoHereSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--pcl-blue)] text-white">
      <Image
        src="/img3.png"
        alt="Aerial water background"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,53,150,0.58)_0%,rgba(1,22,54,0.78)_45%,rgba(0,16,38,0.88)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
            Explore
          </p>
          <h2 className="mt-4 font-pcl-display text-4xl font-black leading-[0.96] tracking-tight text-white sm:text-5xl lg:text-[4rem]">
            What you can do here
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {actionItems.map((item, index) => (
            <article
              key={item.title}
              className={`flex flex-col items-center text-center xl:px-6 ${index > 0 ? "xl:border-l xl:border-white/14" : ""}`}
            >
              <div className="text-white">{item.icon}</div>
              <h3 className="mt-5 max-w-[15rem] font-pcl-display text-3xl font-black leading-[0.96] tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-4 max-w-[15rem] text-sm leading-6 text-white/78">
                {item.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
