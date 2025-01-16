import { notFound } from "next/navigation";
import { allBlogs } from "@hhs/.content-collections/generated";
import Markdown from "@hhs/components/custom/mdx";
import Subtitle from "@hhs/components/custom/subtitle";
import LandingLayoutView from "@hhs/layouts/landing-layout";
import Link from "next/link";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

async function getBlogPostFromParams(params: { slug: string }) {
  const post = allBlogs.find((post) => post.slugAsParams === params.slug);
  if (!post) {
    return null;
  }
  return post;
}

export async function generateStaticParams(): Promise<BlogPostPageProps["params"][]> {
  return allBlogs.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <LandingLayoutView>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <Subtitle>{post.title}</Subtitle>
        <div className="flex items-center gap-4 text-muted-foreground mb-8">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString()}
          </time>
          <span>•</span>
          <span>{post.author}</span>
          {post.tags && (
            <>
              <span>•</span>
              <div className="flex gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${encodeURIComponent(tag)}`}
                    className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
        <Markdown code={post.body.code} />
      </article>
    </LandingLayoutView>
  );
}

