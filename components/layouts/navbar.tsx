import Link from "next/link";
import { MobileNavbar } from "@/components/layouts/mobile-navbar";
import { navbarLinks } from "@/lib/data";

export function Navbar() {
  return (
    <div className="md:px-14 px-6 py-4 flex justify-between items-center fixed top-0 w-full z-10 backdrop-blur-sm supports-[backdrop-filter]:bg-black/10">
      <h2 className="md:text-2xl text-lg">
        <Link href={"/"}>REVESPORT</Link>
      </h2>
      <div className="hidden md:flex md:gap-9 gap-2 text-[#F5F5F580]">
        {navbarLinks.map((links) => (
          <Link
            href={links.href}
            key={`${links.name}-${links.href}`}
            className="footer-links-animation hover:text-default-white uppercase"
          >
            {links.name}
          </Link>
        ))}
      </div>
      <button className="hidden md:block bg-default-white text-default-black py-2 px-6 rounded-3xl">
        <Link href={"/apply"}>APPLY</Link>
      </button>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
}
