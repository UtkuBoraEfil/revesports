import { blogs } from "@/lib/blogs";
import { Navbar } from "@/components/ui/navbar";
import Image from "next/image";

export default function BlogPart({ params }: { params: any }) {
  const { slugs } = params;
  const blog = blogs[Number(slugs)];
  return (
    <section className="bg-default-black text-white">
      <Navbar />
      <div className="xl:px-28 md:px-14 px-6 py-14 font-roboto">
        <h1 className=" text-4xl md:text-8xl text-center font-impact">{blog.title}</h1>
        <div className="w-full flex justify-between pt-12 items-center">
          <div className="flex gap-4 items-center">
            <Image
              src={"/images/academic.jpg"}
              width={30}
              height={30}
              alt={"author"}
              className="rounded-full my-3"
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
          className="w-full h-96 object-cover object-center rounded-md my-12"
        />
        <p className="md:text-xl leading-7">{blog.text}</p>
      </div>
    </section>
  );
}
