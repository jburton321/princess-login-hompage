function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-white"
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
 * Full-width CTA and support section shown above the footer.
 */
export function AccountAccessCtaSection() {
  return (
    <section id="contact-support" className="relative w-full overflow-hidden">
      <img
        src="/img6.png"
        alt="Coastal harbor view"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff80_0%,#ffffff2e_28%,#023596c4_68%,#023596_100%)]"
        aria-hidden
      />

      <div className="relative z-10 px-8 pb-16 pt-0 sm:px-12 sm:pb-20 sm:pt-0 lg:px-16 lg:pb-24 lg:pt-0">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center text-white">
          <h2 className="font-pcl-display text-4xl font-black leading-[0.96] tracking-tight text-[var(--pcl-blue)] sm:text-5xl lg:text-[4rem]">
            Access Your Account
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-black sm:text-[1.05rem]">
            If you have received your login credentials, you can access your
            account below to review your benefits and manage your package.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex min-w-[220px] items-center justify-center rounded-full bg-[var(--pcl-pink)] px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-white no-underline shadow-[0_10px_28px_rgba(230,0,96,0.32)] transition-[transform,filter] hover:-translate-y-0.5 hover:brightness-105"
          >
            Log In
          </a>

          <div className="mt-12 w-full max-w-5xl border-t border-white/20 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Need Assistance?
            </p>
            <h3 className="mt-3 font-pcl-display text-3xl font-black leading-[0.98] tracking-tight text-white sm:text-[2.5rem]">
              Here to support your next step.
            </h3>
            <p className="mt-5 text-base leading-8 text-white/88 sm:text-[1.05rem]">
              If you have questions about your account details, package
              availability, or next steps, our team is ready to help. Princess
              Promotions provides a clear path to ensure you understand your
              benefits and stay connected.
            </p>

            <div className="mt-8 grid gap-4 text-center sm:grid-cols-3">
              <div className="w-full rounded-2xl border border-white/16 bg-white/10 px-5 py-4 backdrop-blur-[2px]">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/72">
                  Phone
                </p>
                <p className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-white">
                  <PhoneIcon />
                  +1 888 403 0301
                </p>
              </div>
              <div className="w-full rounded-2xl border border-white/16 bg-white/10 px-5 py-4 backdrop-blur-[2px]">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/72">
                  Hours
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  Monday - Friday 6am-8pm PT, Saturday - Sunday 7am-6pm
                </p>
              </div>
              <div className="w-full rounded-2xl border border-white/16 bg-white/10 px-5 py-4 backdrop-blur-[2px]">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/72">
                  Email
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  [INSERT EMAIL]
                </p>
              </div>
            </div>

            <a
              href="#"
              className="mt-8 inline-flex min-w-[220px] items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-white no-underline transition-[background-color,color,transform] hover:-translate-y-0.5 hover:bg-white hover:text-[var(--pcl-blue)]"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
