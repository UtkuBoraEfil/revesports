"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { BenefistsCarouselSliderNavigation } from "./benefits-carousel-slider-navigation";

import Image from "next/image";

export function BenefitsCarouselSlider() {
  return (
    <Swiper
      modules={[Navigation]}
      className="w-full relative"
    >
      <SwiperSlide>
        <div className="overflow-hidden aspect-square relative before:absolute before:bg-black/50 before:opacity-50 before:inset-0 before:z-[1]">
          <Image
            src="/images/section1.jpg"
            alt="volleyball"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="overflow-hidden aspect-square relative before:absolute before:bg-black/50 before:opacity-50 before:inset-0 before:z-[1]">
          <Image
            src="/images/section1.jpg"
            alt="volleyball"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </SwiperSlide>
      <BenefistsCarouselSliderNavigation />
    </Swiper>
  );
}
