import Image from "next/image";
import Link from "next/link";

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
export function BlogPart(props: BlogProps) {
  return (
    <Link
      href={`blog/${props.slug}`}
      className=" max-w-96 font-roboto  text-default-white  flex flex-col"
    >
      <div className="w-full relative ">
        <div className="absolute  rounded-full py-1 px-2 bg-gray-600 bg-opacity-50 top-2 left-2">{props.category}</div>
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
            <p className="text-left opacity-60 py-2 text-sm">{props.createdAt}</p>
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
    </Link>
  );
}

