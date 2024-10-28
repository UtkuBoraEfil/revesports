import { ContactFormCard } from "./_components/contact-form-card";
import { roboto } from "@/app/fonts/fonts";
import { ContactIllustration } from "@/assets/contact-illustration";
import { cn } from "@/lib/utils";

export default function Page({}) {
  return (
    <section className={cn("pt-32 md:px-14 px-6", roboto.className)}>
      <div className="flex flex-col md:flex-row gap-12 md:gap-4 justify-between items-end">
        <div className="flex flex-col gap-8 w-full">
          <h1 className="text-5xl font-bold">
            Aklınızdan geçenleri tartışalım 👋
          </h1>

          <ContactFormCard />
        </div>
        <div className="w-2/3 mx-auto md:w-1/2">
          <ContactIllustration />
        </div>
      </div>
    </section>
  );
}
