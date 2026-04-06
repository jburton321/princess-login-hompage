import Image from "next/image";

const actionItems = [
  {
    title: "Access your account",
    imageSrc: "/cruise-lines/ship-primary.png",
    imageAlt: "Princess Cruises ship viewed from the front",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Review your available benefits",
    imageSrc: "/cruise-lines/ship-secondary.png",
    imageAlt: "Princess Cruises ship sailing near mountains",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Understand how your package works",
    imageSrc: "/family-travel-moment.svg",
    imageAlt: "Travel lifestyle illustration for package benefits",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Get support when you need assistance",
    imageSrc: "/cruise-lines/ship-primary.png",
    imageAlt: "Princess Cruises ship at sea with open sky",
    imageClassName: "object-cover object-top",
  },
] as const;

/**
 * Full-width explainer banner showing the main actions available on the site.
 */
export function WhatYouCanDoHereSection() {
  return (
    <section className="w-full bg-white">
      <div className="px-6 pb-8 pt-14 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-pcl-display text-4xl font-black leading-[0.96] tracking-tight text-[#124191] sm:text-5xl lg:text-[4rem]">
            What you can do here
          </h2>
        </div>
      </div>

      <div className="grid w-full gap-px bg-white xl:grid-cols-4">
        {actionItems.map((item) => (
          <article
            key={item.title}
            className="group relative min-h-[20rem] overflow-hidden"
          >
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              className={`${item.imageClassName} transition-transform duration-700 ease-out group-hover:scale-105`}
              sizes="(max-width: 1280px) 100vw, 25vw"
            />

            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,43,73,0.14)_0%,rgba(0,43,73,0.34)_48%,rgba(0,43,73,0.76)_100%)] transition-opacity duration-500 group-hover:opacity-90"
              aria-hidden
            />

            <div className="relative z-10 flex min-h-[20rem] items-end p-6 sm:p-8">
              <h3 className="max-w-[15rem] font-pcl-display text-3xl font-black leading-[0.96] tracking-tight text-white transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:text-[2.4rem]">
                {item.title}
              </h3>
            </div>
          </article>
        ))}
      </div>

      <div className="px-6 pb-14 pt-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-medium text-[#5A6673] sm:text-base">
            Explore each area to manage your package with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
