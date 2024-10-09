import {Swiper2} from "@/components/ui/swiper2";

export function Section1 () {
  return (
    <section className="bg-default-white py-16 md:px-14 px-6 w-full flex text-default-black gap-9">
      <div className="flex flex-col justify-between gap-32 w-full">
        <div className="w-full flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <div className="bg-default-black rotate-45 size-[6px]"></div>
            <p className=" font-roboto ">01/04</p>
          </div>
          <h2 className=" lg:text-8xl text-6xl ">ELEVATE YOUR SKILLS WITH COLLOGE VOLLEYBALL.</h2>
        </div>
        <div className="flex w-full justify-between items-end gap-5">
          <p className="font-roboto text-sm lg:text-base">Dreaming of playing volleyball and studying in the US?</p>
          <h2 className="lg:text-8xl text-6xl">R.</h2>
        </div>
      </div>
      <Swiper2 />
    </section>
  );
};