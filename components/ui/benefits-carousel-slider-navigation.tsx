import { ArrowRight, ArrowLeft } from "lucide-react";
import { useSwiper } from "swiper/react";

export function BenefistsCarouselSliderNavigation() {
  const swiper = useSwiper();
  return (
    <div className="flex gap-3 absolute bottom-4 right-5 z-10">
      <button
        onClick={() => swiper.slidePrev()}
        className=" size-12 grid place-content-center rounded-full border border-default-white  text-default-white"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className=" size-12 grid place-content-center rounded-full bg-default-white text-default-black"
      >
        <ArrowRight />
      </button>
    </div>
  );
}
