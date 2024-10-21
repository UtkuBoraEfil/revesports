"use client";
import { roboto } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import { CATEGORIES_QUERYResult } from "@/sanity/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function CategoryBadge({
  categories,
}: {
  categories: CATEGORIES_QUERYResult;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="flex gap-2 items-center overflow-x-scroll nowrap">
      {categories &&
        categories.length > 0 &&
        categories.map((category, idx) => (
          <button
            key={`${category.slug?.current}-${category.title}-${idx}`}
            className={cn(
              "text-base px-4 rounded-full font-medium text-center flex h-8 items-center justify-center text-muted-foreground hover:text-default-white transition-colors",
              searchParams.has("category") &&
                searchParams.get("category") === category.slug?.current &&
                "bg-muted text-default-white",
              roboto.className
            )}
            onClick={() => {
              if (
                searchParams.has("category") &&
                searchParams.get("category") === category.slug?.current
              ) {
                router.push(`${pathname}`);
                return;
              }
              const newSearchParams = createQueryString(
                "category",
                category.slug?.current!
              );
              router.push(`${pathname}?${newSearchParams}`);
            }}
          >
            {category.title}
          </button>
        ))}
    </div>
  );
}
