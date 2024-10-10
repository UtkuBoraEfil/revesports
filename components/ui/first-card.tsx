// Removed import of map from "framer-motion/client"
import Image from "next/image";

interface FirstCardProps {
  title: string;
  year: string;
  city: string;
  skills: string[];
  image: string;
}

export function FirstCard(props: FirstCardProps) {
  return (
    <div className="flex flex-col gap-4 max-w-[420px] mx-auto">
      <Image
        src={props.image}
        alt={"image"}
        className="w-full h-auto object-cover object-center "
        width={1000}
        height={1000}
      />
      <div className=" border-t border-t-white border-opacity-30 w-full">
        <div className="flex w-full justify-between font-roboto text-lg pb-4 py-4">
          <p>{props.title}</p>
          <p>{props.year}</p>
        </div>
        <div className="flex w-full justify-between font-roboto opacity-50">
          <div className="flex gap-2 items-center">
            <div className="rotate-45 bg-default-white size-2"></div>
            <p>{props.city}</p>
          </div>
          <div className="flex items-center">
            {props.skills.map((skill: string, idx: number) => (
              <p key={idx} className="relative before:content-['-']  first:before:content-none">{skill}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
