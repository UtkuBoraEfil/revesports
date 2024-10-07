import { FirstSection } from "@/components/FirstSection";
import { SecondSection } from "@/components/SecondSection";
import { Section1 } from "@/components/Section1";
import { Services } from "@/components/Services";
import { Reason } from "@/components/Reason";
import {Section2} from "@/components/section2";
import { Newsletter } from "@/components/Newsletter";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main >
      <div className="w-full">
        <FirstSection/>
      </div>
        <SecondSection/>
        <Section1/>
        <Services/>
        <Reason/>
        <Section2/>
        <Newsletter/>
        <Contact/>
    </main>
  );
}
