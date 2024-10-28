import { roboto } from "@/app/fonts/fonts";
import { sectionSidebarTexts } from "@/lib/data";

export function SectionsSidebar({
  active = "Revesport",
  from = "Carousel",
}: {
  active?: string;
  from?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 min-w-fit text-sm md:text-base ${roboto.className}`}
    >
      {sectionSidebarTexts.map((text, index) => {
        if (text === active) {
          return (
            <div
              key={`${text}-${index}-${active}-${from}`}
              className="flex gap-4 items-center"
            >
              <div className="w-2 h-2 bg-default-white rotate-45"></div>
              <p className="">{text}</p>
            </div>
          );
        } else {
          return (
            <p
              key={`${text}-${index}-${active}-${from}`}
              className="pl-6 opacity-50"
            >
              {text}
            </p>
          );
        }
      })}
    </div>
  );
}
