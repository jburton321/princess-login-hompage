import Image from "next/image";

/**
 * Informational section below the hero that reassures users they are on the
 * official account access page for their promotional travel package.
 */
export function OfficialAccessSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(280px,360px)_minmax(360px,1fr)_220px] lg:gap-8 xl:gap-12">
        <div className="max-w-sm">
          <h2 className="font-pcl-display text-4xl font-black leading-[0.96] tracking-tight text-[#124191] sm:text-5xl">
            You&apos;re in the right place
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-[#1F2937] sm:text-[1.05rem]">
            <p>
              If you were directed here after purchasing a promotional travel
              package, this is the official place to access your account and
              review your available benefits.
            </p>
            <p>
              Our goal is to provide a clear and reliable experience by giving
              you direct access to the information and support you may need.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[21rem] overflow-hidden rounded-b-[3.5rem] bg-white lg:max-w-[25.5rem] xl:max-w-[27rem]">
          <Image
            src="/cruise-lines/ship-primary.png"
            alt="Princess Cruises ship viewed from the front at sea"
            width={819}
            height={1126}
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 336px, (max-width: 1280px) 408px, 432px"
          />
        </div>

        <div className="mx-auto w-full max-w-[12.5rem] overflow-hidden bg-white lg:mt-16 lg:max-w-[12rem] xl:max-w-[12.5rem]">
          <Image
            src="/cruise-lines/ship-secondary.png"
            alt="Princess Cruises ship sailing beside mountains"
            width={683}
            height={1024}
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 200px, 200px"
          />
        </div>
      </div>
    </section>
  );
}
