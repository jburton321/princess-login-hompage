import Image from "next/image";

/**
 * Blue promo-style explainer card clarifying that cruise and hotel benefits can
 * follow different rules and timelines.
 */
export function BenefitsMayWorkDifferentlySection() {
  return (
    <section className="bg-white pl-0 pr-6 py-16 sm:pr-10 sm:py-20 lg:pr-16 lg:py-24">
      <div className="max-w-7xl">
        <div className="overflow-hidden rounded-r-[2.25rem] rounded-l-none bg-[#0F43A6] text-white lg:h-[27rem] lg:rounded-r-[13.5rem]">
          <div className="grid items-center gap-8 px-8 py-10 sm:px-12 sm:py-12 lg:h-[27rem] lg:grid-cols-[minmax(0,1fr)_27rem] lg:gap-0 lg:px-16 lg:py-0">
            <div className="max-w-2xl lg:py-14">
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
              <div
                className="absolute left-1/2 top-1/2 hidden h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2756B0] lg:block"
                aria-hidden
              />

              <div className="relative z-10 size-[16rem] overflow-hidden rounded-full sm:size-[18rem] lg:size-[21rem]">
                <Image
                  src="/family-travel-moment.svg"
                  alt="Travel benefits illustration"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 336px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
