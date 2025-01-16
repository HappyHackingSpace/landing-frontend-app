"use client";
import { MDXContent } from "@content-collections/mdx/react";
import * as React from "react";
import ContentSection from "./items/content-section";
import MarkdownImage from "./items/markdown-image";
import { ProjectCard, ProjectGrid, Collapse } from "../projects";

interface HeadingProps extends React.PropsWithChildren {
  id?: string;
}

const heading = (As: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
  const Heading = ({ id = "h1", children }: HeadingProps) => (
    <a
      href={`#${id}`}
      className="group relative no-underline focus-visible:ring-0"
    >
      <As
        id={id}
        className="group-focus-visible:underline border-b border-dashed border-primary p-1  group-hover:after:content-['_↗'] inline"
      >
        {children}
      </As>
    </a>
  );
  Heading.displayName = As;
  return Heading;
};

interface MarkdownProps {
  code: string;
}

const Markdown = ({ code }: MarkdownProps) => {
  return (
    <ContentSection>
      <MDXContent
        code={code}
        components={{
          img: MarkdownImage,
          h1: heading("h1"),
          h2: heading("h2"),
          h3: heading("h3"),
          h4: heading("h4"),
          h5: heading("h5"),
          h6: heading("h6"),
          ProjectCard,
          ProjectGrid,
          Collapse,
        }}
      />
    </ContentSection>
  );
};

export default Markdown;
