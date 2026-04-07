/**
 * Informational section below the hero that reassures users they are in the
 * right place to access their Princess Promotions account.
 */
export function OfficialAccessSection() {
  return (
    <section className="bg-white py-0">
      <div className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fbfcfe_100%)] lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="flex items-center justify-center px-8 py-10 sm:px-12 sm:py-12 lg:justify-start lg:px-16 lg:py-16">
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--pcl-pink)]">
              Official access
            </p>

            <h2 className="mt-4 font-pcl-display text-4xl font-black leading-[0.96] tracking-tight text-[var(--pcl-blue)] sm:text-5xl lg:text-[4rem]">
              You&apos;re in the
              <br />
              right place
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#1F2937] sm:text-[1.05rem]">
              <p>
                If you were directed here after purchasing a promotional travel
                package, this is the official place to access your account and
                review your available benefits.
              </p>
              <p>
                Our goal is to provide a clear and reliable experience by
                giving you direct access to the information and support you may
                need.
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[22rem] lg:min-h-full">
          <img
            src="/img1.webp"
            alt="Lifestyle travel scene aboard a sailboat"
            className="absolute inset-0 h-full w-full object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
}
