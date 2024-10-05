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

