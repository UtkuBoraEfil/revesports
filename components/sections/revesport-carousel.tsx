import { roboto } from "@/app/fonts/fonts";
import { RevesportCarouselSlider } from "@/components/ui/revesport-carousel-swiper";
import { SectionsSidebar } from "../ui/sections-sidebar";

export function RevesportCarousel() {
  return (
    <section
      className="py-16 md:px-14 px-6"
      id="carousel"
    >
      <div className="flex flex-col md:flex-row lg:gap-20 gap-10 mb-8 lg:mb-0">
        <SectionsSidebar active="Revesport" />
        <div className="flex flex-col gap-6 lg:gap-8 max-w-[660px]">
          <h2 className="lg:text-8xl text-6xl leading-none">
            WHAT IS <br /> REVESPORT?
          </h2>
          <p className={`opacity-60 text-sm md:text-base ${roboto.className}`}>
            ReveSport is a personal development startup that aims to turn your
            dreams into reality in the world of sport. ReveSport, born from the
            combination of the French words &apos;rêve&apos; (dream) and
            &apos;sport&apos; (sport), offers personalised solutions for
            athletes to maximise their success. It provides you with the chance
            to pursue both an academic career and an athletic career in America
            by identifying schools that match your language abilities, academic
            achievements and talents.
          </p>
        </div>
      </div>

      <RevesportCarouselSlider />
    </section>
  );
}
