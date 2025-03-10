"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The direction of the marquee.
   * @default "left"
   */
  direction?: "left" | "right";
  /**
   * The speed of the marquee.
   * @default "normal"
   */
  speed?: "slow" | "normal" | "fast";
  /**
   * Pause the marquee on hover.
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * The gap between each child.
   * @default "1rem"
   */
  gap?: string;
  /**
   * The number of times to repeat the children to ensure the marquee is filled.
   * @default 2
   */
  repeat?: number;
}

export function Marquee({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = false,
  gap = "1rem",
  repeat = 2,
  className,
  ...props
}: MarqueeProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === containerRef.current) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  // Calculate animation duration based on speed
  const getDuration = () => {
    const speedMap = {
      slow: 40,
      normal: 20,
      fast: 10,
    };
    return `${speedMap[speed]}s`;
  };

  // Create repeated children
  const repeatedChildren = Array(repeat)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="flex shrink-0 items-center"
        style={{ gap }}
      >
        {children}
      </div>
    ));

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex animate-marquee whitespace-nowrap",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDirection: direction === "right" ? "reverse" : "normal",
          animationDuration: getDuration(),
        }}
      >
        {repeatedChildren}
      </div>
    </div>
  );
} 