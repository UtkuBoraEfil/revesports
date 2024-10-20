import { roboto } from "@/app/fonts/fonts";

export function CallToActionItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="flex justify-between items-center md:px-14 px-6 py-8 border-t border-default-white border-opacity-30 gap-4 hover:bg-default-white hover:text-default-black transition-colors duration-300">
      <h1 className="lg:text-6xl md:text-5xl text-2xl w-1/2 shrink-0">
        {title}
      </h1>
      <p
        className={`opacity-60 text-[12px] lg:text-base ${roboto.className} max-w-[284px] w-1/2`}
      >
        {text}
      </p>
    </div>
  );
}
