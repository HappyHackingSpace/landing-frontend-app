"use client";
import * as React from "react";
import { GradientHeading } from "@hhs/components/custom/gradient-heading";
import { Particles } from "@hhs/components/custom/particles";
import { useTheme } from "next-themes";
import { ChildrenProps } from "@hhs/types/layout-props";
import { cn } from "@hhs/utils/cn";
import { MANIFESTO } from "@hhs/constants/manifesto";

interface TextWrapperProps extends ChildrenProps {
  className?: string;
}

const TextWrapper = ({ children, className }: TextWrapperProps) => (
  <p className={cn("text-pretty xs:text-lg sm:text-xl", className)}>
    {children}
  </p>
);

const ManifestoPageView = () => {
  const { theme } = useTheme();
  const [color, setColor] = React.useState("#ffffff");

  React.useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <article className="relative">
      <section className="relative max-w-3xl mx-auto space-y-6 z-10">
        <GradientHeading size="lg" className="mb-4">
          {MANIFESTO.title}
        </GradientHeading>
        {MANIFESTO.content.map((paragraph, index) => (
          <TextWrapper key={index}>{paragraph}</TextWrapper>
        ))}
        <TextWrapper className="mt-4"> {MANIFESTO.signature}</TextWrapper>
      </section>

      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </article>
  );
};

export default ManifestoPageView;
