"use client";

import React from "react";
import { Marquee } from "@/components/magicui/Marquee";

export function MarqueeDemo() {
  return (
    <div className="space-y-8">
      {/* <div className="space-y-2">
        <h2 className="text-xl font-bold">Basic Marquee</h2>
        <Marquee className="py-4 [--gap:2rem]">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="flex h-20 w-40 items-center justify-center rounded-md border bg-background px-4 font-semibold"
            >
              Item {i + 1}
            </div>
          ))}
        </Marquee>
      </div> */}

      <div className="space-y-2">
        {/* <h2 className="text-xl font-bold">Right Direction</h2> */}
        <Marquee direction="right" speed="slow" className="py-4 [--gap:2rem]">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="flex h-20 w-40 items-center justify-center rounded-md border bg-background px-4 font-semibold"
            >
              Item {i + 1}
            </div>
          ))}
        </Marquee>
      </div>

      {/* <div className="space-y-2">
        <h2 className="text-xl font-bold">Pause on Hover</h2>
        <Marquee pauseOnHover speed="fast" className="py-4 [--gap:2rem]">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="flex h-20 w-40 items-center justify-center rounded-md border bg-background px-4 font-semibold"
            >
              Item {i + 1}
            </div>
          ))}
        </Marquee>
      </div> */}
    </div>
  );
} 