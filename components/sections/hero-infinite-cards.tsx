"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function HeroInfiniteCards() {
  return (
    <div className="bg-default-white md:py-5 py-3 overflow-hidden">
      <InfiniteMovingCards
        items={quotes}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const quotes = [
  "YOU CAN DO IT",
  "VOLLEYBALL SCHOLARSHIP",
  "MAKE SPORTS AS A FUN HOBBY",
  "BOTH PHYSICALLY AND SPIRITUALLY",
];
