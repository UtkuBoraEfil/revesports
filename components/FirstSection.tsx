import { Navbar } from "./ui/navbar";
import Image from "next/image";
import arrow from "@/public/images/arrow.png";
import { Quote } from "./ui/quote";

export function FirstSection() {
  return (
    <section className="w-full h-full">
      <div className="min-h-screen min-w-full bg-flag-image  bg-cover bg-no-repeat bg-center flex flex-col justify-between">
          <Navbar />
          <div className=" text-[156px] mx-auto px-40 text-center leading-[148px] pt-12 pb-32">
            <div className="relative">
              <h1 className="">REVESPORT TURN YOUR DREAMS INTO REALITY.</h1>
              <button className="absolute -bottom-16 arrow-down px-4 py-4">
                <Image src={arrow} alt="" />
              </button>
            </div>
          </div>
        <Quote />
      </div>
    </section>
  );
}

/* Arrow - Down */

// position: absolute;
// width: 72px;
// height: 125px;
// left: calc(50% - 72px/2);
// top: 718px;

// background: rgba(245, 245, 245, 0.04);
// box-shadow: 0px -8px 22.5px 8px rgba(0, 0, 0, 0.25);
// backdrop-filter: blur(12px);
// /* Note: backdrop-filter has minimal browser support */
// border-radius: 1000px;
