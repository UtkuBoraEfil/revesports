"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export function Quote() {
  return (
    <div className="flex  overflow-hidden bg-default-white py-5   ">
      <InfiniteMovingCards
        items={quotes}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const quotes = ["YOU CAN DO IT", "VOLLEYBALL SCHOLARSHIP", "MAKE SPORTS AS A FUN HOBBY", "BOTH PHYSICALLY AND SPIRITUALLY"];
