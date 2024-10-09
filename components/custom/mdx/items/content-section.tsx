import { cn } from "@hhs/utils/cn";

const ContentSection = ({ children }: ChildrenProps) => (
  <article
    className={cn(
      "text-pretty",
      "prose-headings:-mt-2",
      "prose-hr:border-dashed",
      "prose-ul:list-none	prose-ul:pl-0",
      "prose dark:prose-invert",
      "prose-code:rounded prose-code:border prose-code:px-0.5 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
      "prose-code:border-base-300 prose-code:bg-base-100 prose-code:text-base-700",
      "dark:prose-code:border-base-500 dark:prose-code:bg-base-700 dark:prose-code:text-base-100",
      "hover:prose-a:decoration-primary-500 hover:prose-a:decoration-2 prose-a:underline-offset-4"
    )}
  >
    {children}
  </article>
);

export default ContentSection;
