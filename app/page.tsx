import { Hero2 } from "./components/Hero2";
import { HeroSection } from "./components/HeroSection";
import { LoginForm } from "./components/LoginForm";
import { SiteHeader } from "./components/SiteHeader";

const splitPanelInset =
  "flex min-h-0 flex-1 flex-col justify-center px-6 py-10 sm:px-12 sm:py-12";
const splitContentCenter = "flex w-full shrink-0 justify-center";
const splitContentWidth = "flex w-full min-w-0 max-w-md shrink-0 flex-col items-center text-center";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <HeroSection />

        <div className="relative flex min-h-0 flex-1 flex-col bg-[var(--pcl-white)] lg:max-w-[50%]">
          <div className={splitPanelInset}>
            <div className={splitContentCenter}>
              <div className={splitContentWidth}>
                <h2 className="pcl-heading-domaine">Welcome</h2>
                <p className="mt-2 text-sm font-medium text-[var(--pcl-grey)]">Login with Email</p>

                <div className="mt-10 w-full">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Hero2 />
    </div>
  );
}
