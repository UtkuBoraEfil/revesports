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
  "YAPABİLİRSİN",
  "VOLEYBOL BURSU",
  "EĞLENCENİZİ MESLEK HÂLİNE GETİRİN",
  "HEM FİZİKSEL HEM DE RUHSAL OLARAK",
];
