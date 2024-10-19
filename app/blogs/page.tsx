"use client";
import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { BlogPart } from "@/components/ui/blog";
import { blogs } from "@/lib/blogs";
import { cn } from "@/lib/utils";
export default function Blog() {
const [active, setActive] = useState("All");
  return (
    <section className="bg-default-black text-white">
      <Navbar />
      <div className="w-full md:px-14 px-6 flex justify-between  font-roboto my-5">
        <div className="flex md:gap-4 gap-1 justify-between w-full md:justify-normal">
          <button onClick={() => setActive("All")} className={cn("py-1 px-1 md:px-2 rounded-sm text-center", (active == "All") && "bg-[#444]")}>
            All
          </button>
          <button onClick={() => setActive("Basketball")} className={cn("py-1 px-1 md:px-2 rounded-sm text-center", (active == "Basketball") && "bg-[#444]")}>
            Basketball
          </button>
          <button onClick={() => setActive("Soccer")} className={cn("py-1 px-1 md:px-2 rounded-sm text-center", (active == "Soccer") && "bg-[#444]")}>
            Soccer
          </button>
          <button onClick={() => setActive("Volleyball")} className={cn("py-1 px-1 md:px-2 rounded-sm text-center", (active == "Volleyball") && "bg-[#444]")}>
            Volleyball
          </button>
          <button onClick={() => setActive("Football")} className={cn("py-1 px-1 md:px-2 rounded-sm text-center", (active == "Football") && "bg-[#444]")}>
            Football
          </button>

        </div>
      </div>
      <div className=" md:px-14 px-6 py-14 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-fit place-content-center mx-auto  gap-10 ">
        {blogs
          .filter(blog => active === "All" || blog.category === active)
          .map((blog, idx) => (
            <BlogPart key={idx} title={blog.title} altTitle={blog.altTitle} image={blog.image} author={blog.author} category={blog.category} createdAt={blog.createdAt} updatedAt={blog.updatedAt} slug={blog.slug} />
          ))}
      </div>
    </section>
  );
}
