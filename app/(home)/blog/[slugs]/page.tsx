"use client";
import { impact, roboto } from "@/app/fonts/fonts";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { blogs } from "@/lib/blogs";
import Image from "next/image";

export default function BlogPart({ params }: { params: any }) {
  const { slugs } = params;
  const blog = blogs[Number(slugs)];
  return (
    <section className="bg-default-black text-white pt-20 min-[1280px]:pt-32 py-12">
      <TracingBeam className={`${roboto.className} antialiased`}>
        <h1
          className={`text-4xl md:text-6xl lg:text-8xl tracking-tight ${impact.className}`}
        >
          {blog.title}
        </h1>
        <div className="w-full flex justify-between pt-6 items-center">
          <div className="flex gap-4 items-center">
            <Image
              src={"/images/academic.jpg"}
              width={30}
              height={30}
              alt={"author"}
              className="rounded-full"
            />
            <p className="md:text-lg">{blog.author}</p>
          </div>
          <p className="md:text-lg">{blog.createdAt}</p>
        </div>
        <div className="relative w-full pt-[30%] overflow-hidden my-4 rounded-md">
          <Image
            src={"/images/flag.jpeg"}
            alt={"image"}
            className="object-cover object-center inset-0 absolute"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
        <p className="md:text-lg tracking-tight">{blog.text}</p>
      </TracingBeam>
    </section>
  );
}
