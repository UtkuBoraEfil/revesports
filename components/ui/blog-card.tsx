import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { roboto } from "@/app/fonts/fonts";
import { POSTS_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

export function BlogCard(props: POSTS_QUERYResult[0]) {
  const { title, author, mainImage, publishedAt, categories, slug, summary } =
    props;

  return (
    <Card
      className={`${roboto.className} group h-full bg-white/5 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden`}
    >
      <Link
        href={`blog/${slug?.current}`}
        className="h-full flex flex-col"
      >
        <CardHeader className="p-0">
          <div className="relative">
            {/* Categories */}
            <div className="absolute flex flex-wrap gap-2 top-3 right-3 z-10">
              {categories?.map((category) => (
                <span
                  key={category._id}
                  className="px-3 py-1.5 text-xs font-medium bg-black/70 text-white rounded-full backdrop-blur-sm"
                >
                  {category.title}
                </span>
              ))}
            </div>

            {/* Image Container */}
            <div className="relative aspect-[16/9] overflow-hidden bg-black/60">
              {mainImage ? (
                <Image
                  src={urlFor(mainImage).width(800).height(450).url()}
                  alt={mainImage.alt || title || "blog image"}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 bg-gray-800" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-grow p-6">
          {/* Date */}
          {publishedAt && (
            <time className="text-sm text-gray-400 mb-2 block">
              {new Date(publishedAt).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}

          {/* Title */}
          {title && (
            <h2 className="text-xl font-bold mb-3 text-white group-hover:text-gray-300 transition-colors line-clamp-2">
              {title}
            </h2>
          )}

          {/* Summary */}
          {summary && (
            <p className="text-gray-400 line-clamp-3 text-sm">{summary}</p>
          )}
        </CardContent>

        <CardFooter className="p-6 pt-0 mt-auto">
          {/* Author */}
          {(author?.image || author?.name) && (
            <div className="flex items-center gap-3">
              {author.image && (
                <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-gray-700">
                  <Image
                    src={urlFor(author.image).width(32).height(32).url()}
                    alt={author.name || "author"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {author.name && (
                <span className="text-sm text-gray-400">{author.name}</span>
              )}
            </div>
          )}
        </CardFooter>
      </Link>
    </Card>
  );
}
