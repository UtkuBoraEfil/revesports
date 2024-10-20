import { HeroInfiniteCards } from "./hero-infinite-cards";
import { ArrowDown } from "@/assets/arrow-down";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="w-full h-full"
      id="hero"
    >
      <div className="min-h-screen min-w-full bg-flag-image grid grid-rows-3 place-items-center overflow-hidden">
        <div className="relative row-span-3">
          <h1 className="lg:text-[156px] md:text-[120px] sm:text-7xl text-6xl text-center lg:leading-[148px] md:leading-[120px]">
            REVESPORT
            <br />
            TURN YOUR
            <br />
            DREAMS INTO
            <br />
            REALITY.
          </h1>
          <div className="absolute -bottom-20 w-full flex justify-center z-[1]">
            <button className="arrow-down w-[72px] h-[125px] grid place-items-center">
              <Link href="#carousel">
                <ArrowDown />
              </Link>
            </button>
          </div>
        </div>

        <HeroInfiniteCards />
      </div>
    </section>
  );
}
