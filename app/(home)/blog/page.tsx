import { BlogCard } from "@/components/ui/blog-card";

import { sanityFetch } from "@/sanity/lib/client";
import {
  CATEGORIES_QUERY,
  POSTS_QUERY,
  POSTS_SLUGS_QUERY,
} from "@/sanity/lib/queries";
import CategoryBadge from "./_components/category-badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Revesport Blog - Scholarship, Sport Scholarship, USA Scholarship",
};
export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const category = sanityFetch({
    query: CATEGORIES_QUERY,
    params: {},
    revalidate: false,
    tags: ["category"],
  });

  const blog = sanityFetch({
    query: POSTS_QUERY,
    params: { category: searchParams.category || null },
    revalidate: false,
    tags: ["post"],
  });

  const [categories, blogs] = await Promise.all([category, blog]);

  return (
    <section className="bg-default-black text-white pt-32 md:px-14 px-6 flex flex-col gap-8">
      {categories.length > 0 && <CategoryBadge categories={categories} />}

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            {...blog}
          />
        ))}
        {blogs.length === 0 && (
          <h1 className="px-2 text-4xl">Post bulunamadı...</h1>
        )}
      </div>
    </section>
  );
}
