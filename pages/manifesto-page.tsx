"use client";
import * as React from "react";
import { GradientHeading } from "@hhs/components/custom/gradient-heading";
import { Particles } from "@hhs/components/custom/particles";
import { useTheme } from "next-themes";
import { ChildrenProps } from "@hhs/types/layout-props";
import { cn } from "@hhs/utils/cn";

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
      <section className="relative max-w-3xl mx-auto space-y-6 z-50">
        <GradientHeading size="lg" className="mb-4">
          Embracing Collaboration, Fueling Imagination
        </GradientHeading>
        <TextWrapper>
          At Happy Hacking Space, we are more than just a group of
          individuals&mdash;we are a nonprofit community driven by the power of
          curiosity, exploration, and shared purpose. We reject the myth of
          scarcity and instead, wholeheartedly believe in an economy of
          abundance, where collaboration, mutual support, and collective growth
          drive us forward.
        </TextWrapper>
        <TextWrapper>
          In our world, creativity thrives through connection. We champion the
          idea that by uplifting one another, we can unlock new levels of
          imagination, resilience, and possibility. It&apos;s not just about
          surviving; it&rsquo;s about thriving together.
        </TextWrapper>
        <TextWrapper>
          We don&rsquo;t just see community as a space but as a force&mdash;one
          that encourages creative exploration and collective action. Our vision
          is built on the belief that when we collaborate, we build a future
          where there&rsquo;s enough for everyone, and where each individual
          contribution strengthens the whole.
        </TextWrapper>
        <TextWrapper>
          Join us in reimagining what&rsquo;s possible when we support each
          other with openness and trust. Together, we create, we grow, and we
          succeed.
        </TextWrapper>
        <TextWrapper>
          Let&rsquo;s come together, share our strengths, and create something
          bigger than ourselves.
        </TextWrapper>
        <TextWrapper className="mt-4">Happy Hacking Space</TextWrapper>
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
