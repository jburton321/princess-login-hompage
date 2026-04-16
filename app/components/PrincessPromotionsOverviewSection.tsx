function FeatureIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--pcl-blue)_16%,white)] bg-white shadow-[0_8px_24px_rgba(2,53,150,0.06)]">
      {children}
    </div>
  );
}

const overviewCards = [
  {
    title: "Princess Future Cruise Package",
    icon: (
      <svg
        className="h-7 w-7 text-[var(--pcl-pink)]"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M3 17.25h18M6 14.5h12l-1.4-4.2a1.5 1.5 0 0 0-1.42-1.03H8.82A1.5 1.5 0 0 0 7.4 10.3L6 14.5Zm2.5 2.75a1.25 1.25 0 1 1-2.5 0m9.5 0a1.25 1.25 0 1 1-2.5 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Hotel & Resort Benefits",
    icon: (
      <svg
        className="h-7 w-7 text-[var(--pcl-pink)]"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M4.5 19.5h15M6.75 19.5V8.25A2.25 2.25 0 0 1 9 6h6a2.25 2.25 0 0 1 2.25 2.25V19.5M9.75 10.5h.008v.008H9.75V10.5Zm0 3h.008v.008H9.75V13.5Zm4.5-3h.008v.008h-.008V10.5Zm0 3h.008v.008h-.008V13.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Promotional Travel Offers",
    icon: (
      <svg
        className="h-7 w-7 text-[var(--pcl-pink)]"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M21 16.5V7.5a1.5 1.5 0 0 0-1.5-1.5h-15A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h15a1.5 1.5 0 0 0 1.5-1.5ZM7.5 9.75h9m-9 3h6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

/**
 * Follow-up explainer section that introduces what Princess Promotions covers.
 */
export function PrincessPromotionsOverviewSection() {
  return (
    <section
      id="learn-more"
      className="w-full bg-[linear-gradient(180deg,#F8FAFD_0%,#F3F6FB_100%)] px-8 py-0 sm:px-12 lg:px-16"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center pt-14 text-center sm:pt-16 lg:pt-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--pcl-pink)]">
          Princess Promotions
        </p>
        <h2 className="mt-4 max-w-3xl font-pcl-display text-4xl font-black leading-[0.96] tracking-tight text-[var(--pcl-blue)] sm:text-5xl lg:text-[4rem]">
          What is Princess Promotions?
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#1F2937] sm:text-[1.05rem]">
          Princess Promotions supports guests who have purchased select
          promotional travel packages connected to future travel opportunities
          and related benefits.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-0">
        {overviewCards.map((card, index) => (
          <div
            key={card.title}
            className={`flex flex-col items-center px-0 py-2 text-center sm:px-4 lg:items-start lg:px-8 lg:text-left ${index > 0 ? "lg:border-l lg:border-[color-mix(in_srgb,var(--pcl-blue)_10%,white)]" : ""}`}
          >
            <FeatureIcon>{card.icon}</FeatureIcon>
            <h3 className="max-w-[16rem] font-pcl-display text-3xl font-black leading-[0.96] tracking-tight text-[var(--pcl-blue)] sm:text-[2.35rem]">
              {card.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-[color-mix(in_srgb,var(--pcl-blue)_10%,white)] pb-14 pt-6 sm:pb-16 lg:pb-20">
        <p className="text-center text-sm font-medium text-[#5A6673] sm:text-base">
          Details, availability, and timelines may vary based on your package.
        </p>
      </div>
    </section>
  );
}
