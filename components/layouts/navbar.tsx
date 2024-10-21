import Link from "next/link";
import { MobileNavbar } from "@/components/layouts/mobile-navbar";
import { navbarLinks } from "@/lib/data";
import { Logo } from "@/assets/logo";

export function Navbar() {
  return (
    <div className="md:px-14 px-6 py-4 flex justify-between items-center fixed top-0 w-full z-10 backdrop-blur-sm supports-[backdrop-filter]:bg-black/10">
      <h2 className="md:text-2xl text-lg">
        <Link
          href={"/"}
          className="w-16 md:w-24 inline-block"
        >
          <Logo />
        </Link>
      </h2>
      <div className="hidden md:flex md:gap-9 gap-2 text-[#F5F5F580]">
        {navbarLinks.map((links, idx) => (
          <Link
            key={`${links.name}-${links.href}`}
            href={links.href}
            className="footer-links-animation hover:text-default-white uppercase"
          >
            {links.name}
          </Link>
        ))}
      </div>

      <Link
        href={"/apply"}
        className="hidden md:block bg-default-white text-default-black py-2 px-6 rounded-3xl"
      >
        APPLY NOW
      </Link>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
}
