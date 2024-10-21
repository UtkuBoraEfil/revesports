import { roboto } from "@/app/fonts/fonts";
import { ApplyFormCard } from "./_components/apply-form-card";

export default function Page({}) {
  return (
    <div
      className={`bg-default-black pt-32 md:px-14 px-6 text-default-white ${roboto.className}`}
    >
      <ApplyFormCard />
    </div>
  );
}
