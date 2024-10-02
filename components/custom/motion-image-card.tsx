"use client";
import * as React from "react";
import {
  HTMLMotionProps,
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@hhs/utils/cn";

interface MotionImageProps extends HTMLMotionProps<"div"> {
  src: string;
  zIndexOffset?: number;
}

const MotionImageCard = (props: MotionImageProps) => {
  const { src, zIndexOffset = 0, className } = props;

  const springValue = useSpring(0, {
    bounce: 0,
  });
  const zIndex = useTransform(
    springValue,
    (value) => +Math.floor(value * 10) + 10 + zIndexOffset
  );
  const scale = useTransform(springValue, [0, 1], [1, 1.1]);

  const content = (
    <img
      src={src}
      alt="Happy Hacking Space"
      className="relative h-full w-full object-cover aspect-square p-1 bg-background rounded-md"
      draggable={false}
    />
  );

  const containerClassName = cn(
    "relative size-36 md:size-52 flex-col overflow-hidden rounded-md shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl border",
    className
  );

  return (
    <React.Fragment>
      <motion.div
        onMouseEnter={() => springValue.set(1)}
        onMouseLeave={() => springValue.set(0)}
        style={{
          zIndex,
          scale,
        }}
        className={cn(containerClassName, "hidden md:flex")}
        {...props}
      >
        {content}
      </motion.div>

      <div className={cn(containerClassName, "flex md:hidden")}>{content}</div>
    </React.Fragment>
  );
};

export default MotionImageCard;
