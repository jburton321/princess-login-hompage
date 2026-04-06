import { Hero2LeftPanel } from "./Hero2LeftPanel";
import { LoginForm } from "./LoginForm";

/**
 * Full-width split block: branded marketing column + white login column.
 * Placed below the primary hero row on the home page.
 */
export function Hero2() {
  return (
    <section
      className="flex w-full flex-col lg:min-h-screen lg:flex-row"
      aria-labelledby="hero2-left-heading"
    >
      <Hero2LeftPanel />

      <div className="relative flex min-h-[28rem] flex-1 flex-col justify-center bg-white px-6 py-10 sm:px-12 sm:py-12 lg:min-h-0 lg:max-w-[50%]">
        <div className="flex w-full shrink-0 justify-center">
          <div className="flex w-full min-w-0 max-w-md shrink-0 flex-col items-center text-center">
            <h2 className="m-0 font-pcl-display text-[44px] font-bold leading-[48px] tracking-normal text-[#1A365D]">
              Welcome
            </h2>
            <p className="mt-2 text-sm font-medium text-[#666666]">Login with Email</p>

            <div className="mt-10 w-full">
              <LoginForm idPrefix="hero2-" variant="hero2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
