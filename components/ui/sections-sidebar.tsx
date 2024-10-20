import { roboto } from "@/app/fonts/fonts";
import { sectionSidebarTexts } from "@/lib/data";

export function SectionsSidebar({ active = "Revesport" }: { active?: string }) {
  return (
    <div
      className={`flex flex-col gap-4 min-w-fit text-sm md:text-base ${roboto.className}`}
    >
      {sectionSidebarTexts.map((text, index) => {
        if (text === active) {
          return (
            <div
              key={index}
              className="flex gap-4 items-center"
            >
              <div className="w-2 h-2 bg-default-white rotate-45"></div>
              <p className="">{text}</p>
            </div>
          );
        } else {
          return <p className="pl-6 opacity-50">{text}</p>;
        }
      })}
    </div>
  );
}
