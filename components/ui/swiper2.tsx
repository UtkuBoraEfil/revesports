"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { CustomNavigation } from "./customNavigation";

import Image from "next/image";

export function Swiper2() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper w-full !py-10"
    >
      <SwiperSlide className="darker-bg " >
        <Image
          src="/images/section1.jpg"
          alt="volleyball"
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-center"
        />
      </SwiperSlide>
      <SwiperSlide className="darker-bg" >
        <Image
          src="/images/services1.jpg"
          alt="volleyball"
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-center"
        />
      </SwiperSlide>
      <CustomNavigation />
    </Swiper>
  );
}

