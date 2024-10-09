import { Navbar } from "./ui/navbar";
import Image from "next/image";
import arrow from "@/public/images/arrow.png";
import { Quote } from "./ui/quote";

export function FirstSection() {
  return (
    <section className="w-full h-full">
      <div className="min-h-screen min-w-full bg-flag-image  bg-cover bg-no-repeat bg-center flex flex-col justify-between">
          <Navbar />
          <div className=" lg:text-[156px] md:text-[120px] text-7xl mx-auto  text-center lg:leading-[148px] md:leading-[120px] pt-12 pb-32">
            <div className="relative">
              <h1 className="">REVESPORT<br/>TURN YOUR<br/>DREAMS INTO<br/>REALITY.</h1>
              <div className="absolute -bottom-16 w-full flex justify-center">
                <button className="arrow-down lg:px-4 lg:py-4 px-3 py-3">
                  <Image src={arrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        <Quote />
      </div>
    </section>
  );
}

