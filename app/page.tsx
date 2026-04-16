import { AccountAccessCtaSection } from "./components/AccountAccessCtaSection";
import { FaqSection } from "./components/FaqSection";
import { Hero2 } from "./components/Hero2";
import { OfficialAccessSection } from "./components/OfficialAccessSection";
import { PrincessPromotionsOverviewSection } from "./components/PrincessPromotionsOverviewSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <Hero2 />
      <OfficialAccessSection />
      <PrincessPromotionsOverviewSection />
      <FaqSection />
      <AccountAccessCtaSection />
      <SiteFooter />
    </div>
  );
}
