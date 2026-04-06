import Image from "next/image";
import { LoginForm } from "./components/LoginForm";
import { SiteHeader } from "./components/SiteHeader";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2400&auto=format&fit=crop";

/** Same inset + centering as the login column so both max-w-md blocks line up. */
const splitPanelInset =
  "flex min-h-0 flex-1 flex-col justify-center px-6 py-10 sm:px-12 sm:py-12";
const splitContentCenter = "flex w-full shrink-0 justify-center";
const splitContentWidth = "flex w-full min-w-0 max-w-md shrink-0 flex-col items-center text-center";
const splitContentWidthLeft =
  "flex w-full min-w-0 max-w-md shrink-0 flex-col items-start text-left";

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
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-[2.25rem] lg:leading-snug">
                  Welcome to Princess Promotions
                </h1>
                <p className="mt-5 text-base font-semibold leading-relaxed text-white sm:text-lg">
                  Access your travel benefits, review your package, and get the support you need for your next
                  experience.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
                  Princess Promotions supports guests who have purchased promotional travel packages that may include
                  future cruise credits, hotel benefits, and other travel-related offers.
                </p>
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
