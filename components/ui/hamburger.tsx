"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, CircleX } from "lucide-react";
import Link from "next/link";


export function Hamburger() {
  return (
    <Sheet>
    <SheetTrigger>
      <button className="flex  md:hidden self-end outline-none focus:outline-none">
        <Menu size={24} />
      </button>
    </SheetTrigger>
    <SheetContent>
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
            <div className=" max-w-fit bg-default-black text-default-white hover:bg-default-white hover:text-default-black border border-default-black transition-all duration-300  px-6 py-3 rounded-3xl text-xl">
              APPLY
            </div>
          </div>
    </SheetContent>
  </Sheet>
  );
}
