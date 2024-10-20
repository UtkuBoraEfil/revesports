import Image from "next/image";
import { roboto } from "@/app/fonts/fonts";

interface FirstCardProps {
  title: string;
  year: string;
  city: string;
  skills: string[];
  image: string;
}

export function RevesportCarouselSliderCard(props: FirstCardProps) {
  return (
    <div className={`flex flex-col gap-4 max-w-[420px] ${roboto.className}`}>
      <div className="relative aspect-square before:absolute before:bg-black/20 before:opacity-50 before:inset-0 before:z-10 group overflow-hidden cursor-pointer">
        <Image
          src={props.image}
          alt={"slider image"}
          className="absolute inset-0 object-cover object-center group-hover:scale-105 transition-all duration-300 ease-in-out"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="border-t border-t-white border-opacity-30 w-full">
        <div className="flex w-full justify-between items-center text-lg py-2 font-semibold">
          <h3>{props.title}</h3>
          <h3>{props.year}</h3>
        </div>
        <div className="flex w-full justify-between opacity-50 items-center">
          <div className="flex gap-2 items-center">
            <div className="rotate-45 bg-default-white size-2"></div>
            <p>{props.city}</p>
          </div>
          <div className="flex items-center text-sm">
            {props.skills.map((skill: string, idx: number) => (
              <p
                key={`${idx}-${skill}`}
                className="relative before:content-['-']  first:before:content-none"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
