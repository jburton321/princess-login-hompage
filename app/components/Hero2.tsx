import { Hero2LeftPanel } from "./Hero2LeftPanel";
import { LoginForm } from "./LoginForm";

/**
 * Full-width split block: branded marketing column + white login column.
 * Placed below the primary hero row on the home page.
 */
export function Hero2() {
  return (
    <section
      className="flex w-full flex-col lg:min-h-[75vh] lg:flex-row"
      aria-labelledby="hero2-left-heading"
    >
      <Hero2LeftPanel />

      <div className="relative flex min-h-[28rem] flex-1 flex-col justify-center bg-[linear-gradient(180deg,#fdfefe_0%,#f3f8fd_100%)] px-6 py-10 sm:px-12 sm:py-12 lg:min-h-0 lg:max-w-[50%]">
        <div className="flex w-full shrink-0 justify-center">
          <div className="ios-glass-panel ios-glass-panel-clear flex w-full min-w-0 max-w-md shrink-0 flex-col items-center rounded-[2rem] px-6 py-8 text-center sm:px-8 sm:py-10">
            <h2 className="mb-6 font-pcl-display text-3xl font-black tracking-tight text-[#1A365D] sm:text-[2.2rem]">
              Member Login
            </h2>
            <LoginForm idPrefix="hero2-" variant="hero2" />
          </div>
        </div>
      </div>
    </section>
  );
}
