import Image from "next/image";

function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-[var(--pcl-pink)]"
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

const legalLinks = [
  "Legal",
  "Accessibility Policy",
  "Privacy Notice",
  "Website Terms of Use",
  "Terms & Conditions",
  "FAQs",
] as const;

/**
 * Simple Princess Promotions footer matching the provided reference.
 */
export function SiteFooter() {
  return (
    <footer className="bg-[var(--pcl-blue)] px-6 py-8 text-white sm:px-10 sm:py-10 lg:px-16 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5 border-b border-white/25 pb-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3 text-center md:text-left">
              <Image
                src="/footer-logo.png"
                alt="Princess Promotions"
                width={193}
                height={72}
                className="mx-auto h-auto w-[150px] sm:w-[193px] md:mx-0"
              />
              <p className="max-w-md text-sm leading-6 text-white/82">
                Official access and support for Princess Promotions members.
              </p>
            </div>

            <div className="space-y-1 text-center md:text-right">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/72">
                Contact Us
              </p>
              <a
                href="tel:+18884030301"
                className="inline-flex items-center gap-2 text-xl font-semibold leading-7 text-white no-underline"
              >
                <PhoneIcon />
                +1 888 403 0301
              </a>
              <p className="text-sm leading-6 text-white/78">
                Available for account access and package support.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:justify-between md:text-left">
            <nav
              aria-label="Footer legal links"
              className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm leading-6 text-white/92 md:justify-start"
            >
              {legalLinks.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="w-fit no-underline transition-opacity hover:opacity-80"
                >
                  {label}
                </a>
              ))}
            </nav>

            <a
              href="#"
              className="w-fit text-sm leading-6 text-white underline underline-offset-4"
            >
              Do Not Sell or Share My Personal Information
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 border-t border-white/20 pt-4 text-center text-xs leading-5 text-white/72 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>&copy; 2026 Princess Promotions</p>
            <p>Princess is a registered mark of Princess Cruise Lines, Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
