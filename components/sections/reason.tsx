import { SectionsSidebar } from "../ui/sections-sidebar";
import { roboto } from "@/app/fonts/fonts";

export function Reason() {
  return (
    <section className="pb-8 md:px-14 px-6">
      <div className="flex flex-col md:flex-row md:justify-between mb-16 gap-2">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
          <SectionsSidebar active="The Reason" />
          <div className="flex flex-col gap-8 ">
            <h2 className="lg:text-8xl sm:text-6xl text-4xl leading-none">
              BİZİ EN İYİ YAPAN SEBEPLER.
            </h2>
            <p className={`opacity-60 ${roboto.className}`}>
              ReveSport’un kurucusu olarak, Amerika’ya gelme sürecini bizzat
              yaşamış ve halen Amerika’da aktif bir sporcu olarak kariyerine
              devam eden biri olarak derin bir deneyime sahibim. Amerika’da
              sporcu olmanın zorluklarını, fırsatlarını ve başarıya ulaşma
              yollarını çok iyi biliyorum. Bu süreçte yanınızda olacağım; hem
              profesyonel hem de kişisel gelişiminizi en iyi şekilde
              yönlendirmeniz ve bu yolda doğru insanlarla tanışmanız için
              rehberlik edeceğim. Amerika’da sporcu olma hayalinizi
              gerçekleştirmeniz, bu süreçte başarılı olmanız, kendinizi
              keşfetmeniz ve hedeflerinize ulaşma yolunda adımlar atmanız için
              yanınızda olacağım.
            </p>
          </div>
        </div>
        <div className="min-h-full w-full flex justify-end items-end ">
          <div>
            <button className=" bg-default-white text-default-black  px-6 py-3 rounded-3xl">
              DAHA FAZLASI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
