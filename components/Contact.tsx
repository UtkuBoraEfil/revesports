import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/images/arrow-up.png";
import { Instagram } from "lucide-react";
import whatsapp from "@/public/images/whatsapp.png";
import { Volleyball1 } from "./ui/volleyball1";
import { Volleyball2 } from "./ui/volleyball2";

export function Contact() {
  return (
    <section className="md:pt-28 pt-12 md:pb-20 pb-12 md:px-14 px-6 flex flex-col gap-[255px] relative">
      <div className="flex justify-between lg:text-3xl md:text-2xl text-base">
        <div className="flex flex-col gap-10">
          <h2>SOCIAL MEDIA</h2>
          <div className="flex gap-3">
            <div className="bg-default-white rounded-full p-2 text-default-black">
              <Image src={whatsapp} alt="whatsapp" />
            </div>
            <div className="bg-default-white rounded-full p-2 text-default-black">
              <Instagram size={24} />
            </div>
          </div>
        </div>
        <div className="flex md:gap-16 gap-4">
          <Link href="">ABOUT</Link>
          <Link href="">SERVICES</Link>
          <Link href="">APPLY</Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row   md:justify-between md:items-end items-center">
        <div className="relative">
          <h1 className=" lg:text-[156px] md:text-8xl text-6xl  leading-none">REVESPORT</h1>
          <div className="absolute w-full -top-10 flex justify-center">
            <button className="mx-auto  arrow-down lg:px-4 lg:py-4 md:px-3 md:py-3 px-2 py-2">
              <Image src={arrow} alt="arrow" className="w-5 md:w-8" />
            </button>
          </div>
          <Volleyball2/>
        </div>
        <p className=" font-roboto opacity-90 leading-none">
          {" "}
          <span className=" opacity-60 text-sm lg:text-base">© Copyright 2024 |</span> ReveSport
        </p>
      </div>
      <Volleyball1 />
    </section>
  );
}
