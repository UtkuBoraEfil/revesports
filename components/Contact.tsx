import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import whatsapp from "@/public/images/whatsapp.png";
import { Volleyball1 } from "./ui/volleyball1";
import { Volleyball2 } from "./ui/volleyball2";

export function Contact() {
  return (
    <section className="pt-28 pb-20 px-14 flex flex-col gap-[255px] relative">
      <div className="flex justify-between text-3xl">
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
        <div className="flex gap-16">
          <Link href="">ABOUT</Link>
          <Link href="">SERVICES</Link>
          <Link href="">APPLY</Link>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <h1 className=" text-[156px] leading-none">REVESPORT</h1>
        <div className="relative">
          <p className=" font-roboto opacity-90 leading-none">
            {" "}
            <span className=" opacity-60">© Copyright 2024 |</span> ReveSport
          </p>
          <Volleyball2 />
        </div>
      </div>
      <Volleyball1 />
    </section>
  );
}
