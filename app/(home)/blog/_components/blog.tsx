import { impact, roboto } from "@/app/fonts/fonts";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { components } from "@/sanity/components/portable-text";
import { urlFor } from "@/sanity/lib/image";
import { POST_QUERYResult } from "@/sanity/types";
import { PortableText } from "next-sanity";
import Image from "next/image";

export function Blog(props: NonNullable<POST_QUERYResult>) {
  const { title, author, mainImage, publishedAt, body, categories } = props;
  return (
    <TracingBeam className={`${roboto.className} antialiased`}>
      {title ? (
        <h1
          className={`text-4xl md:text-6xl lg:text-8xl tracking-tight ${impact.className}`}
        >
          {title}
        </h1>
      ) : null}
      <div className="w-full flex justify-between pt-6 items-center">
        <div className="flex gap-4 items-center">
          {author && author.image && author.name && (
            <>
              <Image
                src={urlFor(author.image).width(30).height(30).url()}
                width={30}
                height={30}
                alt={"author"}
                className="rounded-full"
              />
              <p className="md:text-lg">{author.name}</p>
            </>
          )}
        </div>
        {publishedAt ? (
          <p className="md:text-lg">
            {new Date(publishedAt).toLocaleDateString()}
          </p>
        ) : null}
      </div>
      <div className="relative w-full aspect-video overflow-hidden my-4 rounded-md">
        {mainImage ? (
          <Image
            src={urlFor(mainImage).width(1000).height(1000).url()}
            alt={"image"}
            className="object-cover object-center inset-0 absolute"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
          />
        ) : null}
      </div>
      <div className="flex gap-2 mb-6">
        {categories &&
          categories.length > 0 &&
          categories.map((category) => (
            <p
              key={category._id}
              className="rounded-full px-2 py-0.5 text-xs text-default-black bg-default-white"
            >
              {category.title}
            </p>
          ))}
      </div>
      <article className="max-w-7xl !w-full prose lg:prose-xl prose-invert">
        {body ? (
          <PortableText
            value={body}
            components={components}
          />
        ) : null}
      </article>
    </TracingBeam>
  );
}
