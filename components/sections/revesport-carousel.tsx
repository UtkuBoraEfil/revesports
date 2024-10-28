import { roboto } from "@/app/fonts/fonts";
import { RevesportCarouselSlider } from "@/components/ui/revesport-carousel-swiper";
import { SectionsSidebar } from "../ui/sections-sidebar";
import { HighlightVideoText } from "./highlight-video-text";

export function RevesportCarousel() {
  return (
    <section
      className="py-16 md:px-14 px-6"
      id="carousel"
    >
      <div className="flex flex-col md:flex-row lg:gap-20 gap-10 mb-8 lg:mb-0">
        <SectionsSidebar
          active="Revesport"
          from="Revesport"
        />
        <div className="flex flex-col gap-6 lg:gap-8 max-w-[660px]">
          <h2 className="lg:text-8xl sm:text-6xl text-4xl leading-none">
            REVESPORT <br /> NEDİR?
          </h2>
          <p className={`opacity-60 text-sm md:text-base ${roboto.className}`}>
            ReveSport, spor dünyasında hayallerinizi gerçeğe dönüştürmeyi
            hedefleyen bir kişisel gelişim girişimidir. İsmini Fransızca "rêve"
            (hayal) ve "sport" (spor) kelimelerinin birleşiminden alan
            ReveSport, sporcuların başarılarını en üst düzeye çıkarmaları için
            kişiye özel çözümler sunar. Dil yeteneklerinize, akademik
            başarılarınıza ve yeteneklerinize uygun okulları belirleyerek,
            Amerika’da hem akademik kariyerinizi hem de sportif kariyerinizi
            sürdürme şansı sağlar.
          </p>
        </div>
      </div>
      <HighlightVideoText />

      <RevesportCarouselSlider />
    </section>
  );
}
