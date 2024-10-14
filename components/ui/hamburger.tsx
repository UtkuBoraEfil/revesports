"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, CircleX } from "lucide-react";


export function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
     <button
        onClick={handleClick}
        className={cn("flex  md:hidden self-end", isOpen && "hidden")}
      >
        <Menu size={24} />
      </button>
      {isOpen && (
        <>
          <button
            onClick={handleClick}
            className={cn("text-default-white w-1/2")}
          >
            <CircleX size={28} />
          </button>
          <div className="absolute top-[61px] right-0 z-20 w-1/2">
      <div
        className=" bg-default-white rounded-l-lg border-l-2 border-[#F5F5F533] shadow-2xl "
      >
          <div className="px-4 py-4">

            <div className="text-default-black flex flex-col gap-2  text-3xl ">
              <Link
                href={""}
                className="hover:translate-x-2 transition-all duration-150"
              >
                HOME
              </Link>
              <Link
                href={""}
                className="hover:translate-x-2 transition-all duration-150"
              >
                DETAIL
              </Link>
              <Link
                href={""}
                className="hover:translate-x-2 transition-all duration-150"
              >
                BLOG
              </Link>
              <Link
                href={""}
                className="hover:translate-x-2 transition-all duration-150"
              >
                CONTACT
              </Link>
            </div>
            <div className="w-full mt-10">
                <button className="bg-default-black text-default-white hover:bg-default-white hover:text-default-black border border-default-black transition-all duration-300  px-6 py-3 rounded-3xl text-xl">
                APPLY
                </button>
            </div>
          </div>
      </div>
    </div>
        </>
      )}
    
    </>
  );
}
