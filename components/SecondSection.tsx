
"use client"
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Swiper1 } from "@/components/ui/swiper1";
import { useRef } from "react";

export function SecondSection() {

  const swiperRef = useRef<any>(null); // Create ref for Swiper instance

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Navigate to next slide
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Navigate to previous slide
    }
  };

  return (
    <section className="pt-20 pb-9 md:px-14 px-6">
      <div className="flex flex-col md:flex-row gap-2 justify-between mb-16">
        <div className="flex flex-col md:flex-row lg:gap-20 gap-10">
          <div className="flex flex-col gap-4 font-roboto min-w-fit text-sm md:text-base">
            <div className="flex gap-4 items-center">
              <div className="w-2 h-2 bg-default-white rotate-45"></div>
              <p className="">Revesport</p>
            </div>
            <p className="pl-6 opacity-50">Services</p>
            <p className="pl-6 opacity-50">The Reason</p>
          </div>
          <div className="flex flex-col gap-8 max-w-[660px]">
            <h2 className="lg:text-8xl text-6xl leading-none">
              WHAT IS <br /> REVESPORT?
            </h2>
            <p className="opacity-60 font-roboto text-sm md:text-base">
              ReveSport is a personal development startup that aims to turn your
              dreams into reality in the world of sport. ReveSport, born from
              the combination of the French words &apos;rêve&apos; (dream) and &apos;sport&apos;
              (sport), offers personalised solutions for athletes to maximise
              their success. It provides you with the chance to pursue both an
              academic career and an athletic career in America by identifying
              schools that match your language abilities, academic achievements
              and talents.
            </p>
          </div>
        </div>
        <div className="min-h-full content-end place-self-end">
          <div className="flex gap-3">
            <button onClick={handlePrev} className=" size-12 grid place-content-center rounded-full border border-default-white border-opacity-50">
              <ArrowLeft />
            </button>
            <button onClick={handleNext} className=" size-12 grid place-content-center rounded-full bg-default-white text-default-black">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      <Swiper1 swiperRef={swiperRef} />
    </section>
  );
}
