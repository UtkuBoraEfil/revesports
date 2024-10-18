"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { blogs } from "@/lib/blogs";
import { Navbar } from "@/components/ui/navbar";
import Image from "next/image";

export default function BlogPart({ params }: { params: any }) {
  const { slugs } = params;
  const blog = blogs[Number(slugs)];
  return (
    <section className="bg-default-black text-white">
      <Navbar />
      <TracingBeam className=" px-6 py-14 font-roboto">
        <h1 className=" text-5xl md:text-6xl lg:text-8xl text-center font-impact">{blog.title}</h1>
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
        <Image
          src={"/images/flag.jpeg"}
          alt={"image"}
          width={1000}
          height={1000}
          className="w-full h-96 object-cover object-center rounded-md my-6"
        />
        <p className="md:text-xl leading-7 font-playfair">{blog.text}</p>
      </TracingBeam>
    </section>
  );
}
