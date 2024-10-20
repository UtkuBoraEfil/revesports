import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarLinks } from "@/lib/data";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

export function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex md:hidden self-end outline-none focus:outline-none">
          <AlignJustify size={24} />
        </div>
      </SheetTrigger>
      <SheetContent
        side={"top"}
        className="py-12 backdrop-blur bg-default-black/90 border-none rounded-b-md"
      >
        <SheetHeader className="sr-only hidden">
          <SheetTitle className="sr-only hidden">Revesport</SheetTitle>
          <SheetDescription className="sr-only-hidden">
            Revesport Menu
          </SheetDescription>
        </SheetHeader>
        <div className="text-default-white flex flex-col gap-2 text-4xl">
          {navbarLinks.map((links, index) => (
            <SheetClose
              asChild
              key={`${links.name}-${index}-${links.href}`}
            >
              <Link
                href={links.href}
                className="hover:translate-x-2 uppercase flex gap-2 items-center group will-change-auto transition-all duration-300"
              >
                <div className="size-4 rounded-full bg-white scale-0 group-hover:scale-100 will-change-auto transition-all duration-300" />
                <span className="inline-block -ms-4 group-hover:ms-0 transition-all duration-200">
                  {links.name}
                </span>
              </Link>
            </SheetClose>
          ))}
        </div>
        <div className="w-full mt-12">
          <Link
            href={"/apply"}
            className=" bg-default-white text-default-black hover:bg-default-black hover:text-default-white border border-default-white transition-colors duration-300 px-6 py-2.5 rounded-3xl text-xl ms-2"
          >
            APPLY
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
