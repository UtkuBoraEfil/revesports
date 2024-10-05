import Image from "next/image";
import { FirstSection } from "@/components/FirstSection";
import { SecondSection } from "@/components/SecondSection";
import { Section1 } from "@/components/Section1";
import { Services } from "@/components/Services";
import { Reason } from "@/components/Reason";

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
    </main>
  );
}
