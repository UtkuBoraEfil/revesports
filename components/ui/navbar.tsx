import Link from "next/link";

export function Navbar () {
  return (
    <div className=" border-b border-[#F5F5F533] md:px-14 px-6 py-4 flex justify-between items-center ">
      <h2 className=" md:text-2xl text-lg">REVESPORT</h2>
      <div className=" flex md:gap-9 gap-2 text-[#F5F5F580]">
        <Link href={""} className="hover:text-default-white transition-all duration-150 text-sm md:text-base">HOME</Link>
        <Link href={""} className="hover:text-default-white transition-all duration-150 text-sm md:text-base">DETAIL</Link>
        <Link href={""} className="hover:text-default-white transition-all duration-150 text-sm md:text-base">BLOG</Link>
        <Link href={""} className="hover:text-default-white transition-all duration-150 text-sm md:text-base">CONTACT</Link>
      </div>
      <button className=" bg-default-white text-default-black  md:px-6 md:py-3 px-3 py-2 rounded-3xl text-sm md:text-base">
        APPLY
      </button>
    </div>
  );
};
