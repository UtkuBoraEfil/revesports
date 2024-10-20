import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletenRevesportCarouselSlider() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center justify-end">
        <Skeleton className="size-12 rounded-full" />
        <Skeleton className="size-12 rounded-full" />
      </div>
      <div className="grid grid-cols-4 min-[450px]:grid-cols-2 min-[1024px]:grid-cols-3 min-[1280px]:grid-cols-4 gap-5 w-full">
        <div className="flex flex-col gap-4 w-full">
          <Skeleton className="w-full aspect-square" />
          <div className="border-t border-t-white border-opacity-30 w-full">
            <div className="flex w-full justify-between items-center text-lg py-2 font-semibold gap-4">
              <Skeleton className="w-2/3 h-4 rounded-md" />
              <Skeleton className="w-1/3 h-4 rounded-md" />
            </div>
            <div className="flex w-full justify-between items-center text-lg py-2 font-semibold gap-4">
              <Skeleton className="w-2/3 h-4 rounded-md" />
              <Skeleton className="w-1/3 h-4 rounded-md" />
            </div>
          </div>
        </div>

        <div className="min-[450px]:flex hidden flex-col gap-4 w-full">
          <Skeleton className="w-full aspect-square" />
          <div className="border-t border-t-white border-opacity-30 w-full">
            <div className="flex w-full justify-between items-center text-lg py-2 font-semibold gap-4">
              <Skeleton className="w-2/3 h-4 rounded-md" />
              <Skeleton className="w-1/3 h-4 rounded-md" />
            </div>
            <div className="flex w-full justify-between items-center text-lg py-2 font-semibold gap-4">
              <Skeleton className="w-2/3 h-4 rounded-md" />
              <Skeleton className="w-1/3 h-4 rounded-md" />
            </div>
          </div>
        </div>

        <div className="min-[1024px]:flex hidden flex-col gap-4 w-full">
          <Skeleton className="w-full aspect-square" />
          <div className="border-t border-t-white border-opacity-30 w-full">
            <div className="flex w-full justify-between items-center text-lg py-2 font-semibold gap-4">
              <Skeleton className="w-2/3 h-4 rounded-md" />
              <Skeleton className="w-1/3 h-4 rounded-md" />
            </div>
            <div className="flex w-full justify-between items-center text-lg py-2 font-semibold gap-4">
              <Skeleton className="w-2/3 h-4 rounded-md" />
              <Skeleton className="w-1/3 h-4 rounded-md" />
            </div>
          </div>
        </div>

        <div className="min-[1280px]:flex hidden flex-col gap-4 w-full">
          <Skeleton className="w-full aspect-square" />
          <div className="border-t border-t-white border-opacity-30 w-full">
            <div className="flex w-full justify-between items-center text-lg py-2 font-semibold gap-4">
              <Skeleton className="w-2/3 h-4 rounded-md" />
              <Skeleton className="w-1/3 h-4 rounded-md" />
            </div>
            <div className="flex w-full justify-between items-center text-lg py-2 font-semibold gap-4">
              <Skeleton className="w-2/3 h-4 rounded-md" />
              <Skeleton className="w-1/3 h-4 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
