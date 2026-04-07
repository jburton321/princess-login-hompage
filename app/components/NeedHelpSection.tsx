function PhoneIcon() {
  return (
    <svg
      className="h-8 w-8 shrink-0 text-[var(--pcl-pink)] sm:h-10 sm:w-10"
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

/**
 * Support callout section with a prominent phone number for account help.
 */
export function NeedHelpSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#D9E4F2] bg-[linear-gradient(180deg,#FFFFFF_0%,#F6FAFF_100%)] px-8 py-10 shadow-[0_24px_60px_rgba(0,43,73,0.08)] sm:px-12 sm:py-12 lg:px-16 lg:py-14">
        <div className="max-w-3xl">
          <h2 className="font-pcl-display text-4xl font-black leading-[0.96] tracking-tight text-[var(--pcl-blue)] sm:text-5xl">
            Need help?
          </h2>

          <p className="mt-6 text-base leading-8 text-[#1F2937] sm:text-[1.05rem]">
            If you have questions about your account, package details, or next
            steps, our team is available to assist.
          </p>

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#6A7788]">
              Phone
            </p>
            <a
              href="tel:+18884030301"
              className="mt-2 inline-flex items-center gap-3 font-pcl-display text-4xl font-black leading-none tracking-tight text-[var(--pcl-pink)] no-underline transition-transform duration-300 hover:scale-[1.02] sm:text-5xl"
            >
              <PhoneIcon />
              +1 888 403 0301
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
