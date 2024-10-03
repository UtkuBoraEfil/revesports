import Image from "next/image";
import { FirstSection } from "@/components/FirstSection";

export default function Home() {
  return (
    <main className=" bg-default-black text-default-white ">
      <div className="w-full h-screen">
        <FirstSection/>
      </div>
    </main>
  );
}
