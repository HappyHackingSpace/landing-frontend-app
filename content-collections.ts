import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const landing = defineCollection({
  name: "landing",
  directory: "content",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document, {
      rehypePlugins: [rehypeSlug],
      remarkPlugins: [remarkGfm],
    });
    return {
      ...document,
      image: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURI(
        document.title
      )}`,
      slug: `/${document._meta.path}`,
      slugAsParams: document._meta.path.split("/").slice(1).join("/"),
      body: {
        raw: document.content,
        code: body,
      },
    };
  },
});

export default defineConfig({
  collections: [landing],
});
