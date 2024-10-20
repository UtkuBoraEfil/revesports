"use client";

import "swiper/css";
import "swiper/css/pagination";
import { type Swiper as SwiperRef } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { RevesportCarouselSliderCard } from "@/components/ui/revesport-carousel-swiper-card";
import { SkeletenRevesportCarouselSlider } from "@/components/skeletons/skeleton-revesport-carousel-swiper";
import { Button } from "@/components/ui/button";

import { carouselSwiperItems } from "@/lib/data";

export function RevesportCarouselSlider() {
  const [isMounted, setIsMounted] = useState(false);
  const swiperRef = useRef<SwiperRef>();

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <SkeletenRevesportCarouselSlider />;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center justify-end">
        <Button
          aria-label="Previous Slide"
          onClick={handlePrev}
          variant={"icon"}
          size={"icon"}
          className="hover:bg-default-white hover:text-default-black"
        >
          <ArrowLeft />
        </Button>
        <Button
          aria-label="Next Slide"
          onClick={handleNext}
          variant={"icon"}
          size={"icon"}
          className="bg-default-white text-default-black hover:bg-default-black hover:text-default-white"
        >
          <ArrowRight />
        </Button>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          450: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="w-full"
      >
        {carouselSwiperItems.map((item, index) => (
          <SwiperSlide key={index}>
            <RevesportCarouselSliderCard
              title={item.title}
              year={item.year}
              city={item.city}
              skills={item.skills}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
