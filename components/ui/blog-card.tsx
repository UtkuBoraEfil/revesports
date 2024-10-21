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
import { POSTS_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

export function BlogCard(props: POSTS_QUERYResult[0]) {
  const { title, author, mainImage, publishedAt, categories, slug, summary } =
    props;
  return (
    <Card
      className={`${roboto.className} overflow-hidden border-none bg-default-white`}
    >
      <Link href={`blog/${slug?.current}`}>
        <CardHeader className="p-0 overflow-hidden mb-4">
          <CardTitle>
            <div className="w-full relative">
              <div className="absolute flex gap-2 items-center top-2 left-2 z-[1]">
                {categories &&
                  categories.length > 0 &&
                  categories.map((category) => (
                    <p
                      key={category._id}
                      className="rounded-full px-2 py-1 text-xs text-default-white bg-default-black"
                    >
                      {category.title}
                    </p>
                  ))}
              </div>
              <div className="relative aspect-video overflow-hidden before:absolute before:inset-0 before:rounded-t-md before:bg-gradient-to-t before:from-default-black/50 before:-bottom-10 before:to-transparent before:z-[1]">
                {mainImage ? (
                  <Image
                    src={urlFor(mainImage).width(1000).height(1000).url()}
                    alt={mainImage.alt || title || "revesport blog image"}
                    className="inset-0 object-cover object-center rounded-t-md absolute"
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                ) : null}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2 sm:gap-3">
            {publishedAt ? (
              <p className="text-default-black/50 text-sm">
                {new Date(publishedAt).toLocaleDateString()}
              </p>
            ) : null}

            {title ? (
              <h1 className="text-2xl sm:text-3xl font-semibold line-clamp-2 tracking-tight leading-7">
                {props.title}
              </h1>
            ) : null}

            {summary ? (
              <p className="text-default-black/50 text-base line-clamp-3">
                {summary}
              </p>
            ) : null}
          </div>
        </CardContent>
        <CardFooter>
          {author?.image || author?.name ? (
            <div className="flex gap-2 items-center">
              {author.image ? (
                <Image
                  src={urlFor(author.image).width(30).height(30).url()}
                  width={28}
                  height={28}
                  alt={"author"}
                  className="rounded-full size-7"
                />
              ) : null}
              <p className="text-sm">{author?.name}</p>
            </div>
          ) : null}
        </CardFooter>
      </Link>
    </Card>
  );
}
