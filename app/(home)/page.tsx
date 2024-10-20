import { Hero } from "@/components/sections/hero";
import { RevesportCarousel } from "@/components/sections/revesport-carousel";
import { BenefitsCarousel } from "@/components/sections/benefits-carousel";
import { Services } from "@/components/sections/services";
import { Reason } from "@/components/sections/reason";
import { CallToActions } from "@/components/sections/call-to-actions";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <RevesportCarousel />
      <BenefitsCarousel />
      <Services />
      <Reason />
      <CallToActions />
      <Newsletter />
    </main>
  );
}
