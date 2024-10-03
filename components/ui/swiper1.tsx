"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { FirstCard } from "@/components/ui/first-card";

import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export function Swiper1 () {
  return (
    <Swiper slidesPerView={3}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}

    className="mySwiper gap-9">
    <SwiperSlide>
        <FirstCard
        title="Volleyball Scholarship"
        year="2024"
        city="California"
        skills={["Strategy", "Agility"]}
        image="/images/volleyball.jpg"
        />
    </SwiperSlide>
    <SwiperSlide>
        <FirstCard
        title="Academic Improvement"
        year="2022"
        city="USA"
        skills={["Strategy", "Power"]}
        image="/images/academic.jpg"
        />
    </SwiperSlide>
    <SwiperSlide>
        <FirstCard
        title="Social Activities"
        year="2020"
        city="USA"
        skills={["Agility", "Speed"]}
        image="/images/social.jpg"
        />
    </SwiperSlide>
    <SwiperSlide>
        <FirstCard
        title="Volleyball Scholarship"
        year="2024"
        city="California"
        skills={["Strategy", "Agility"]}
        image="/images/volleyball.jpg"
        />
    </SwiperSlide>
    <SwiperSlide>
        <FirstCard
        title="Academic Improvement"
        year="2022"
        city="USA"
        skills={["Strategy", "Power"]}
        image="/images/academic.jpg"
        />
    </SwiperSlide>
    <SwiperSlide>
        <FirstCard
        title="Social Activities"
        year="2020"
        city="USA"
        skills={["Agility", "Speed"]}
        image="/images/social.jpg"
        />
    </SwiperSlide>
  </Swiper>
  );
};



{/* <div className="flex justify-center gap-9 w-full mx-auto">
<FirstCard
  title="Volleyball Scholarship"
  year="2024"
  city="California"
  skills={["Strategy", "Agility"]}
  image="/images/volleyball.jpg"
/>
<FirstCard
  title="Academic Improvement"
  year="2022"
  city="USA"
  skills={["Strategy", "Power"]}
  image="/images/academic.jpg"
/>
<FirstCard
  title="Social Activities"
  year="2020"
  city="USA"
  skills={["Agility", "Speed"]}
  image="/images/social.jpg"
/>
</div> */}