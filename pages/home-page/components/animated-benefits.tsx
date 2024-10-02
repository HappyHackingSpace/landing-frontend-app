"use client";
import { AnimatedList } from "@hhs/components/custom/animated-list";
import { BENEFITS } from "@hhs/constants/home";
import { cn } from "@hhs/utils/cn";
import { cva } from "class-variance-authority";
import { Check } from "lucide-react";

interface Item {
  info: string;
}

let items = BENEFITS;
items = Array.from({ length: 10 }, () => items).flat();

export const ItemClassName = cn(
  "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-md p-2",
  // animation styles
  "transition-all duration-200 ease-in-out hover:scale-[103%]",
  // light styles
  "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
  // dark styles
  "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
);
const Item = ({ info }: Item) => {
  return (
    <figure className={ItemClassName}>
      <div className="flex flex-row items-center gap-3">
        <div className="size-10 bg-primary flex items-center justify-center shrink-0 rounded-md">
          <Check className="text-background" size={20} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg text-wrap">{info}</span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

const AnimatedBenefits = () => {
  return (
    <div className="relative p-2 flex h-[300px] w-full flex-col overflow-hidden bg-background">
      <AnimatedList>
        {items.map((item, idx) => (
          <Item {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
};

export default AnimatedBenefits;
