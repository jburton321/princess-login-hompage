"use client";

import Image from "next/image";

const faqs = [
  {
    question: "What are Princess Future Cruise Packages?",
    answer:
      "Princess Future Cruise Packages are a flexible way to bundle a future Princess cruise with other travel products, even if you do not yet know when or where you want to travel. Packages include Future Cruise Credits (FCCs), Premium Land Stay Certificates, Hotel Credits, Onboard Credits, and in some cases Pre/Post Cruise Hotel Stay Certificates.",
  },
  {
    question: "What is Princess Promotions?",
    answer:
      "Princess Promotions manages Princess Future Cruise Packages and serves as the redemption and fulfillment site for the travel products included in those packages, other than Future Cruise Credits and Onboard Credits.",
  },
  {
    question:
      "What are the Future Cruise Credits (FCCs) included in the package?",
    answer:
      "FCCs let you pay for Princess cruise bookings when you are ready to book. Each FCC is worth $1, can be used toward new Princess cruise bookings, can be split across one or more cruises, and may also be applied to a travel companion's fare, Princess Plus, Princess Premier, room upgrades, and more.",
  },
  {
    question:
      "How do I redeem my Future Cruise Credits and other travel products included in the Princess Future Cruise Package?",
    answer:
      "Future Cruise Credits and Onboard Credits are added to your Manage Booking account on Princess.com and can be redeemed directly with Princess, your Cruise Vacation Planner, or your travel agent. Other travel components, including Stay Certificates, may be redeemed through Princess Promotions by calling +1 888 403 0301 or visiting www.princesspromotions.com.",
  },
  {
    question:
      "How do I redeem travel products included in the Princess Ultimate Future Cruise Package?",
    answer:
      "Future Cruise Credits and Onboard Credits are handled through Princess.com. Other travel components, including Pre/Post Cruise Hotel Stay Certificates and Premium Land Stay Certificates, are redeemed through Princess Promotions at www.princesspromotions.com or by calling +1 888 403 0301.",
  },
  {
    question: "What are Hotel Credits?",
    answer:
      "Hotel Credits are worth $1 each and can be applied toward discounted hotel stays booked through the hotel booking engine on www.princesspromotions.com or by calling +1 888 403 0301.",
  },
  {
    question:
      "Do Future Cruise Credits, Stay Certificates, and other travel products expire?",
    answer:
      "Future Cruise Credits and Stay Certificates must be booked within 18 months of package purchase. Travel can occur up to 24 months from purchase, and other travel products expire 24 months after purchase.",
  },
  {
    question:
      "Can I cancel my Princess Future Cruise Package / Future Princess Promotions Package?",
    answer:
      "Yes. You have 7 days after purchase to cancel. Florida residents have 30 days, and Washington residents have 15 days. Cancellation can be made by calling 1-800-PRINCESS and choosing option 5, or +1 888 403 0301 depending on the package entry.",
  },
  {
    question:
      "How many Future Cruise Credits will guests earn for eligible wine and merchandise purchases in the Princess Promotions store?",
    answer:
      "Depending on the package, guests may receive up to 15% of the purchase price back as Future Cruise Credits. The applicable amount is shown when purchasing on princesspromotions.com.",
  },
  {
    question:
      "When will guests receive Future Cruise Credits associated with a store purchase?",
    answer:
      "Future Cruise Credits are awarded by the 15th of the month following the purchase date. For example, a purchase made on July 5 would be credited by August 15.",
  },
  {
    question:
      "If a guest cancels or returns a Princess Promotions store purchase, will they lose the Future Cruise Credits earned from that purchase?",
    answer:
      "Yes. Any cancellation or return forfeits the associated Future Cruise Credits.",
  },
  {
    question:
      "Where do guests call if they have questions about shopping for wine and merchandise on PrincessPromotions.com?",
    answer:
      "Guests should call +1 888 403 0301 and ask a customer service team member for assistance.",
  },
] as const;

/**
 * FAQ section styled to match the provided split layout reference.
 */
export function FaqSection() {
  return (
    <section className="w-full bg-[#F6F8FB] px-0 py-0">
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-[26rem] lg:min-h-full">
          <div className="relative h-full overflow-hidden">
            <Image
              src="/img5.png"
              alt="Princess ship sailing through Alaskan waters"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,53,150,0.02)_0%,rgba(2,53,150,0.12)_100%)]"
              aria-hidden
            />
          </div>
        </div>

        <div className="bg-white px-8 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <div className="max-w-4xl">
            <h2 className="font-pcl-display text-4xl font-black leading-[0.96] tracking-tight text-[var(--pcl-blue)] sm:text-5xl">
              FAQs
            </h2>

            <div className="mt-8 divide-y divide-[color-mix(in_srgb,var(--pcl-blue)_10%,white)] border-y border-[color-mix(in_srgb,var(--pcl-blue)_10%,white)]">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start gap-4 text-left marker:content-none">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--pcl-blue)_18%,white)] text-[10px] font-semibold text-[var(--pcl-pink)]">
                      ?
                    </span>
                    <span className="pr-6 font-sans text-lg font-semibold leading-7 text-[#243141]">
                      {faq.question}
                    </span>
                  </summary>
                  <p className="ml-9 mt-3 max-w-3xl text-base leading-7 text-[#5A6673]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
