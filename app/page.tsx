import { BenefitsMayWorkDifferentlySection } from "./components/BenefitsMayWorkDifferentlySection";
import { Hero2 } from "./components/Hero2";
import { NeedHelpSection } from "./components/NeedHelpSection";
import { OfficialAccessSection } from "./components/OfficialAccessSection";
import { PrincessPromotionsOverviewSection } from "./components/PrincessPromotionsOverviewSection";
import { SiteHeader } from "./components/SiteHeader";
import { WhatYouCanDoHereSection } from "./components/WhatYouCanDoHereSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <Hero2 />
      <OfficialAccessSection />
      <PrincessPromotionsOverviewSection />
      <WhatYouCanDoHereSection />
      <BenefitsMayWorkDifferentlySection />
      <NeedHelpSection />
    </div>
  );
}
