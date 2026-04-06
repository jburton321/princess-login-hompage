import Image from "next/image";
import { LoginForm } from "./components/LoginForm";
import { SiteHeader } from "./components/SiteHeader";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2400&auto=format&fit=crop";

const ACCOUNT_BENEFITS = [
  "Receive personalized offers",
  "Manage your tours and bookings",
  "Access member-only deals and updates",
  "Save travelers and payment methods",
  "View and print itineraries & documents",
];

/** Same inset + centering as the login column so both max-w-md blocks line up. */
const splitPanelInset =
  "flex min-h-0 flex-1 flex-col justify-center px-6 py-10 sm:px-12 sm:py-12";
const splitContentCenter = "flex w-full shrink-0 justify-center";
const splitContentWidth = "flex w-full min-w-0 max-w-md shrink-0 flex-col items-center text-center";
const splitContentWidthLeft =
  "flex w-full min-w-0 max-w-md shrink-0 flex-col items-start text-left";

function BenefitCheckIcon() {
  return (
    <svg
      className="mt-0.5 size-5 shrink-0 text-[var(--travel-check)]"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        {/* Left — brand & hero */}
        <div className="relative flex min-h-[28rem] flex-1 sm:min-h-[38vh] lg:min-h-0 lg:max-w-[50%]">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/35" aria-hidden />
          <div className={`relative z-10 ${splitPanelInset}`}>
            <div className={splitContentCenter}>
              <div className={splitContentWidthLeft}>
                <h1 className="font-great-vibes text-4xl leading-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
                  Travelista Tours
                </h1>
                <p className="mt-6 text-sm font-medium leading-relaxed text-white/95 sm:text-base">
                  Travel is the only purchase that enriches you in ways beyond material wealth
                </p>

                <div className="mt-10 w-full">
                  <h3 className="text-lg font-bold text-white drop-shadow-sm">Create an account</h3>
                  <ul className="mt-4 list-none space-y-3 text-sm leading-snug text-white/95">
                    {ACCOUNT_BENEFITS.map((line) => (
                      <li key={line} className="flex gap-3">
                        <BenefitCheckIcon />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — login */}
        <div className="relative flex min-h-0 flex-1 flex-col bg-white lg:max-w-[50%]">
          <div className={splitPanelInset}>
            <div className={splitContentCenter}>
              <div className={splitContentWidth}>
                <h2 className="text-4xl font-bold tracking-tight text-[var(--travel-primary)] sm:text-5xl">Welcome</h2>
                <p className="mt-2 text-sm font-medium text-[var(--travel-text-muted)]">Login with Email</p>

                <div className="mt-10 w-full">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
