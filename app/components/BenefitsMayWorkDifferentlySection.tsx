/**
 * Blue promo-style explainer card clarifying that cruise and hotel benefits can
 * follow different rules and timelines.
 */
export function BenefitsMayWorkDifferentlySection() {
  return (
    <section className="bg-white px-0 pb-16 pt-0 lg:pr-16 lg:pb-24 lg:pt-24">
      <div className="w-full max-w-none lg:max-w-7xl">
        <div className="w-full overflow-hidden rounded-none bg-[var(--pcl-blue)] text-white lg:h-[27rem] lg:rounded-r-[13.5rem] lg:rounded-l-none">
          <div className="grid items-center gap-8 px-8 py-10 lg:h-[27rem] lg:grid-cols-[minmax(0,1fr)_27rem] lg:gap-0 lg:px-16 lg:py-0">
            <div className="max-w-2xl text-center lg:py-14 lg:text-left">
              <h2 className="font-pcl-display text-4xl font-black leading-[0.96] tracking-tight sm:text-5xl">
                Cruise and hotel benefits may work differently
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-white/92 sm:text-[1.05rem]">
                <p>
                  Some promotional packages include cruise-related benefits, while
                  others may include hotel or land-based travel offers.
                </p>
                <p>
                  These benefits may follow different guidelines, booking
                  timelines, and availability. If you are unsure how your
                  benefits apply, we recommend reviewing your account or
                  contacting support.
                </p>
              </div>
            </div>

            <div className="relative flex min-h-[18rem] items-center justify-center lg:min-h-full lg:w-[27rem]">
              <div className="relative flex size-[16rem] items-center justify-center lg:size-[27rem]">
                <div
                  className="absolute inset-0 hidden rounded-full bg-[color-mix(in_srgb,var(--pcl-blue)_78%,white)] lg:block"
                  aria-hidden
                />

                <div className="relative z-10 size-[16rem] overflow-hidden rounded-full lg:size-[21rem]">
                  <video
                    className="h-full w-full object-cover object-center"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label="Travel benefits video"
                  >
                    <source src="/window.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
