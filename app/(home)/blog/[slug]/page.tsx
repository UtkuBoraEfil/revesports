import { sanityFetch } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { Blog } from "../_components/blog";
type PostIndexProps = { params: { slug: string } };
export default async function Page({ params }: PostIndexProps) {
  const blog = await sanityFetch({
    query: POST_QUERY,
    params,
    revalidate: false,
    tags: [`post:${params.slug}`, "author", "category"],
  });

  if (!blog) notFound();

  return (
    <section className="bg-default-black text-white pt-32 min-[1280px]:pt-40 py-12">
      <Blog {...blog} />
    </section>
  );
}
