"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChildrenProps } from "@hhs/types/layout-props";

export interface AnimatedListProps extends ChildrenProps {
  className?: string;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ className, children, delay = 1500 }: AnimatedListProps) => {
    const [index, setIndex] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState(false);
    const childrenArray = React.Children.toArray(children);

    React.useEffect(() => {
      if (isHovered) return;

      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
      }, delay);

      return () => clearInterval(interval);
    }, [childrenArray.length, delay, isHovered]);

    const itemsToShow = React.useMemo(
      () => childrenArray.slice(0, index + 1).reverse(),
      [index, childrenArray]
    );

    return (
      <div
        className={`flex flex-col items-center gap-4 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 200, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}
