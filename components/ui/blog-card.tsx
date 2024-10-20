import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { roboto } from "@/app/fonts/fonts";

interface BlogProps {
  title: string;
  altTitle: string;
  image: string;
  author: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
}
export function BlogCard(props: BlogProps) {
  return (
    <>
      <Card
        className={`${roboto.className} overflow-hidden border-none bg-default-white/90`}
      >
        <Link href={`blog/${props.slug}`}>
          <CardHeader className="p-0 overflow-hidden mb-4">
            <CardTitle>
              <div className="w-full relative">
                <div className="absolute rounded-full px-2 py-0.5 text-xs text-default-white bg-default-black top-2 left-2 z-[1]">
                  {props.category}
                </div>
                <div className="relative aspect-video overflow-hidden before:absolute before:inset-0 before:rounded-t-md before:bg-gradient-to-t before:from-default-black/50 before:-bottom-10 before:to-transparent before:z-[1]">
                  <Image
                    src={props.image}
                    alt={"image"}
                    className="inset-0 object-cover object-center rounded-t-md absolute"
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 sm:gap-4">
              <p className="text-default-black/50 text-sm">{props.createdAt}</p>
              <h1 className="text-2xl sm:text-3xl font-semibold line-clamp-2 tracking-tight leading-7">
                {props.title}
              </h1>
              <p className="text-default-black/50 text-base line-clamp-3">
                {props.altTitle}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex gap-2 items-center">
              <Image
                src={"/images/academic.jpg"}
                width={28}
                height={28}
                alt={"author"}
                className="rounded-full size-7"
              />
              <p className="text-sm">{props.author}</p>
            </div>
          </CardFooter>
        </Link>
      </Card>

      {/* <Link
        href={`blog/${props.slug}`}
        className="max-w-96 font-roboto  text-default-white  flex flex-col"
      >
        <div className="w-full relative ">
          <div className="absolute rounded-full py-1 px-2 bg-gray-600 bg-opacity-50 top-2 left-2">
            {props.category}
          </div>
          <Image
            src={props.image}
            alt={"image"}
            className="w-full h-64 object-cover object-center rounded-md "
            width={1000}
            height={1000}
          />
        </div>
        <div className="px-4 py-3 h-full flex flex-col justify-between">
          <div>
            <p className="text-left opacity-60 py-2 text-sm">
              {props.createdAt}
            </p>
            <h1 className="text-3xl py-2">{props.title}</h1>
            <p className="opacity-60 text-lg">{props.altTitle}</p>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src={"/images/academic.jpg"}
              width={30}
              height={30}
              alt={"author"}
              className="rounded-full my-3"
            />
            <p>{props.author}</p>
          </div>
        </div>
      </Link> */}
    </>
  );
}
