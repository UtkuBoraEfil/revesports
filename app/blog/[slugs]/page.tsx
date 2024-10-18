import { blogs } from "@/lib/blogs";
import { Navbar } from "@/components/ui/navbar";
import Image from "next/image";

export default function BlogPart({ params }: { params: any }) {
  const { slugs } = params;
  const blog = blogs[Number(slugs)];
  return (
    <section className="bg-default-black text-white">
      <Navbar />
      <div className="xl:px-28 md:px-14 px-6 py-14 ">
        <h1 className="md:text-6xl text-4xl text-center">{blog.title}</h1>
        <div className="flex flex-col lg:flex-row gap-10 w-fit mx-auto pt-20 ">
          <div className="shrink-0 md:flex md:flex-col mx-auto">
            <Image
              alt={"image"}
              src={blog.image}
              width={1000}
              height={1000}
              className=" w-full  h-auto xl:w-[32rem] xl:h-[537px]  object-cover object-center rounded-md shrink-0 "
            />
            <div className="hidden lg:flex items-center w-full justify-between">
              <div className="flex gap-4  items-center">
                <Image
                  src={"/images/academic.jpg"}
                  width={40}
                  height={40}
                  alt={"author"}
                  className="rounded-full my-3 "
                />
                <p className="font-roboto text-xl">{blog.author}</p>
              </div>
              <p className="font-roboto text-base md:text-xl">{blog.createdAt}</p>
            </div>
          </div>
          <p className="font-roboto text-base md:text-xl px-5 leading-7">{blog.text}</p>
        </div>
        <div className="flex lg:hidden items-center w-full justify-between pt-10">
              <div className="flex gap-4  items-center">
                <Image
                  src={"/images/academic.jpg"}
                  width={30}
                  height={30}
                  alt={"author"}
                  className="rounded-full my-3 "
                />
                <p className="font-roboto ">{blog.author}</p>
              </div>
              <p className="font-roboto ">{blog.createdAt}</p>
            </div>
      </div>
    </section>
  );
}
