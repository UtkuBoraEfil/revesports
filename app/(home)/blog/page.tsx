"use client";
import { useState } from "react";

import { BlogCard } from "@/components/ui/blog-card";

import { cn } from "@/lib/utils";
import { blogs } from "@/lib/blogs";

const categories = ["All", "Basketball", "Soccer", "Volleyball", "Football"];
export default function Blog() {
  const [active, setActive] = useState("All");
  return (
    <section className="bg-default-black text-white pt-24 md:px-14 px-6 flex flex-col gap-8">
      <div className="flex gap-2 items-center overflow-x-scroll nowrap">
        {categories.map((category, idx) => (
          <button
            key={`${idx}-${category}`}
            onClick={() => setActive(category)}
            className={cn(
              "text-sm px-4 rounded-full font-medium text-center flex h-7 items-center justify-center text-muted-foreground hover:text-default-white transition-colors",
              active == category && "bg-muted text-default-white"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5">
        {blogs
          .filter((blog) => active === "All" || blog.category === active)
          .map((blog, idx) => (
            <BlogCard
              key={`${idx}-${blog.altTitle}`}
              title={blog.title}
              altTitle={blog.altTitle}
              image={blog.image}
              author={blog.author}
              category={blog.category}
              createdAt={blog.createdAt}
              updatedAt={blog.updatedAt}
              slug={blog.slug}
            />
          ))}
      </div>
    </section>
  );
}
