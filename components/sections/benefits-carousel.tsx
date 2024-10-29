import { roboto } from "@/app/fonts/fonts";

import { BenefitsCarouselSlider } from "@/components/ui/benefits-carousel-slider";

export function BenefitsCarousel() {
  return (
    <section className="bg-default-white py-8 md:py-16 md:px-14 px-6 w-full flex text-default-black flex-col md:flex-row gap-8">
      <div className="flex flex-col justify-between w-full">
        <div className="w-full flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <div className="bg-default-black rotate-45 size-1.5" />
            <p className={`${roboto.className} font-bold`}>01/04</p>
          </div>
          <h2 className="lg:text-8xl md:text-6xl text-4xl">
            KOLEJ VOLEYBOLU İLE YETENEKLERİNİZİ GELİŞTİRİN.
          </h2>
        </div>
        <div className="flex w-full justify-between items-end gap-5">
          <p className="font-roboto text-sm lg:text-base">
            ABD'de voleybol oynamayı ve okumayı mı hayal ediyorsunuz?
          </p>
          {/* <h2 className="lg:text-8xl text-6xl">R.</h2> */}
        </div>
      </div>

      <BenefitsCarouselSlider />
    </section>
  );
}
