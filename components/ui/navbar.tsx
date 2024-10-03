import Link from "next/link";

export function Navbar () {
  return (
    <div className=" border-b border-[#F5F5F533] px-14 py-4 flex justify-between items-center ">
      <h2 className=" text-2xl">REVESPORT</h2>
      <div className=" flex gap-9 text-[#F5F5F580]">
        <Link href={""}>HOME</Link>
        <Link href={""}>DETAIL</Link>
        <Link href={""}>BLOG</Link>
        <Link href={""}>CONTACT</Link>
      </div>
      <button className=" bg-default-white text-default-black  px-6 py-3 rounded-3xl">
        APPLY
      </button>
    </div>
  );
};
