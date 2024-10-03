import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Swiper1 } from "@/components/ui/swiper1";

export function SecondSection() {
  return (
    <section className="pt-20 pb-9 px-14">
      <div className="flex justify-between mb-16">
        <div className="flex gap-20">
          <div className="flex flex-col gap-4 font-roboto">
            <div className="flex gap-4 items-center">
              <div className="w-2 h-2 bg-default-white rotate-45"></div>
              <p className="">Revesport</p>
            </div>
            <p className="pl-6 opacity-50">Services</p>
            <p className="pl-6 opacity-50">The Reason</p>
          </div>
          <div className="flex flex-col gap-8 max-w-[660px]">
            <h2 className="text-8xl ">
              WHAT IS <br /> REVESPORT?
            </h2>
            <p className="opacity-60 font-roboto">
              ReveSport is a personal development startup that aims to turn your
              dreams into reality in the world of sport. ReveSport, born from
              the combination of the French words 'rêve' (dream) and 'sport'
              (sport), offers personalised solutions for athletes to maximise
              their success. It provides you with the chance to pursue both an
              academic career and an athletic career in America by identifying
              schools that match your language abilities, academic achievements
              and talents.
            </p>
          </div>
        </div>
        <div className='min-h-full content-end'>
            <div className='flex gap-3'>
                <button className=' size-12 grid place-content-center rounded-full border border-default-white border-opacity-50'>
                    <ArrowLeft/>
                </button>
                <button className=' size-12 grid place-content-center rounded-full bg-default-white text-default-black'>
                    <ArrowRight/>
                </button>
            </div>
        </div>
      </div>
      <Swiper1 />
    </section>
  );
}
