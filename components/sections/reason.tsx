import { SectionsSidebar } from "../ui/sections-sidebar";
import { roboto } from "@/app/fonts/fonts";

export function Reason() {
  return (
    <section className="pb-8 md:px-14 px-6">
      <div className="flex flex-col md:flex-row md:justify-between mb-16 gap-2">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
          <SectionsSidebar active="The Reason" />
          <div className="flex flex-col gap-8 ">
            <h2 className="lg:text-8xl text-6xl leading-none">
              THE REASONS THAT MAKE US THE BEST CHOICE.
            </h2>
            <p className={`opacity-60 ${roboto.className}`}>
              As the founder of ReveSport, I have a deep experience as someone
              who has personally experienced the process of coming to America
              and currently continues his career as an active athlete in
              America. I know very well the difficulties, opportunities and ways
              to achieve success of being an athlete in America. I will be with
              you in this process and I will be with you to guide your
              professional and personal development in the best way and to bring
              you together with the right people on this path. I will be with
              you to realise your dream of becoming an athlete in America, to be
              successful in this process, to discover yourself and to take steps
              towards achieving your goals.
            </p>
          </div>
        </div>
        <div className="min-h-full w-full flex justify-end items-end ">
          <div>
            <button className=" bg-default-white text-default-black  px-6 py-3 rounded-3xl">
              SEE MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
