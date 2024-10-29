import Link from "next/link";
import { Instagram } from "lucide-react";
import { FirstFooterIcon } from "@/assets/first-footer-icon";
import { SecondFooterIcon } from "@/assets/second-footer-icon";
import { roboto } from "@/app/fonts/fonts";
import { Whatsapp } from "@/assets/whatsapp";
import { ArrowDown } from "@/assets/arrow-down";

export function Footer() {
  return (
    <footer className="py-16 md:px-14 px-6 flex flex-col min-h-[45rem] h-full justify-between relative">
      <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-between lg:text-3xl text-2xl">
        <div className="flex flex-col gap-3 items-center sm:items-stretch">
          <h2>SOSYAL MEDYA</h2>
          <div className="flex gap-3">
            <Link
              className="bg-default-white rounded-full p-2 size-10 hover:bg-default-black hover:fill-white transition-colors duration-300"
              href={
                "https://api.whatsapp.com/send?phone=+14434974576&text=Merhaba,%20Revesport%20hakkında%20bilgi%20almak%20istiyorum!"
              }
            >
              <Whatsapp />
            </Link>
            <Link
              className="bg-default-white rounded-full p-2 text-default-black size-10 hover:bg-default-black hover:text-default-white transition-colors duration-300"
              href={"https://www.instagram.com/reveesport/"}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Instagram />
            </Link>
          </div>
        </div>
        <div className="flex md:gap-12 gap-4 justify-center sm:justify-start">
          <Link
            href="/apply"
            className="footer-links-animation"
          >
            BAŞVUR
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-end items-center">
        <div className="relative">
          <h1 className=" lg:text-[156px] md:text-8xl text-6xl  leading-none">
            REVESPORT
          </h1>
          <div className="absolute w-full -top-10 flex justify-center">
            <button className="mx-auto arrow-down lg:px-4 lg:py-4 md:px-3 md:py-3 px-2 py-2 rotate-180 z-[2]">
              <Link href="#hero">
                <ArrowDown />
              </Link>
            </button>
          </div>
        </div>
        <p className={`${roboto.className} opacity-90 leading-none`}>
          <span className="opacity-60 text-sm lg:text-base">
            © Copyright 2024 |
          </span>{" "}
          ReveSport
        </p>
      </div>
      <div className="absolute bottom-0 left-1/2 right-1/2 -translate-x-1/2 sm:left-0 max-w-[25rem] w-full sm:translate-x-0 sm:right-0">
        <FirstFooterIcon />
      </div>
      <div className="hidden lg:block lg:absolute bottom-16 left-1/2 max-w-[30rem] w-full">
        <SecondFooterIcon />
      </div>
    </footer>
  );
}
