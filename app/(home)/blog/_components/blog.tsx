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
    <TracingBeam
      className={`${roboto.className} antialiased max-w-4xl mx-auto px-4 md:px-6 py-8`}
    >
      <div className="space-y-8">
        {/* Title Section */}
        {title && (
          <h1
            className={`${impact.className} text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300`}
          >
            {title}
          </h1>
        )}

        {/* Author and Date Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-800 pb-6">
          {author && author.image && author.name && (
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-full ring-2 ring-gray-700">
                <Image
                  src={urlFor(author.image).width(80).height(80).url()}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg font-medium text-gray-200">{author.name}</p>
            </div>
          )}
          {publishedAt && (
            <time className="text-gray-400">
              {new Date(publishedAt).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </div>

        {/* Main Image Section */}
        {mainImage && (
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src={urlFor(mainImage).width(1920).height(1080).url()}
              alt="Blog cover"
              fill
              priority
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        )}

        {/* Categories Section */}
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category._id}
                className="px-3 py-1 text-sm font-medium text-gray-200 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          {body && (
            <PortableText
              value={body}
              components={{
                ...components,
                block: {
                  normal: ({ children }) => (
                    <p className="text-gray-300 leading-relaxed">{children}</p>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold text-white mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                },
              }}
            />
          )}
        </article>
      </div>
    </TracingBeam>
  );
}

export default Blog;
