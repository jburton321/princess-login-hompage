import Image from "next/image";

const overviewCards = [
  {
    title: "Future Cruise Credits",
    imageSrc: "/cruise-lines/ship-primary.png",
    imageAlt: "Princess Cruises ship at sea",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Hotel & Resort Benefits",
    imageSrc: "/family-travel-moment.svg",
    imageAlt: "Travel lifestyle illustration",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Promotional Travel Offers",
    imageSrc: "/cruise-lines/ship-secondary.png",
    imageAlt: "Princess Cruises ship by a mountain coastline",
    imageClassName: "object-cover object-center",
  },
] as const;

/**
 * Follow-up explainer section that introduces what Princess Promotions covers.
 */
export function PrincessPromotionsOverviewSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <h2 className="font-pcl-display text-4xl font-black leading-[0.95] tracking-tight text-[#124191] sm:text-5xl lg:text-[4rem]">
            What is Princess Promotions?
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#1F2937] sm:text-[1.05rem]">
            Princess Promotions supports guests who have purchased select
            promotional travel packages connected to future travel
            opportunities and related benefits.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {overviewCards.map((card) => {
            return (
              <article key={card.title} className="group flex flex-col">
                <div
                  className="relative h-[24rem] overflow-hidden bg-[#F7F2EC] sm:h-[26rem]"
                >
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    className={`${card.imageClassName} transition-transform duration-500 group-hover:scale-[1.02]`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>

                <h3 className="mt-5 font-pcl-display text-3xl font-black leading-[0.96] tracking-tight text-[#124191] sm:text-[2.7rem]">
                  {card.title}
                </h3>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm font-medium text-[#5A6673] sm:text-base">
          Details, availability, and timelines may vary based on your package.
        </p>
      </div>
    </section>
  );
}
