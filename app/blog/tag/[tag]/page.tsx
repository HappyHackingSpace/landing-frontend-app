import { notFound } from "next/navigation";
import { allBlogs } from "@hhs/.content-collections/generated";
import LandingLayoutView from "@hhs/layouts/landing-layout";
import Link from "next/link";
import Subtitle from "@hhs/components/custom/subtitle";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateStaticParams(): Promise<TagPageProps["params"][]> {
  const tags = new Set<string>();
  allBlogs.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
}

export default function TagPage({ params }: TagPageProps) {
  const decodedTag = decodeURIComponent(params.tag);
  const filteredPosts = allBlogs
    .filter((post) => post.tags?.includes(decodedTag))
    .sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  if (filteredPosts.length === 0) {
    notFound();
  }

  return (
    <LandingLayoutView>
      <Subtitle>Posts tagged with "{decodedTag}"</Subtitle>
      <div className="space-y-8">
        {filteredPosts.map((post, index) => (
          <Link key={index} href={post.slug} className="block">
            <article className="group hover:bg-gray-100 p-4 rounded-lg transition-all">
              <h2 className="text-xl font-semibold group-hover:text-primary">
                {post.title}
              </h2>
              <div className="mt-2 text-sm text-muted-foreground">
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              <p className="mt-2 text-muted-foreground">{post.summary}</p>
              {post.tags && (
                <div className="mt-4 flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${encodeURIComponent(tag)}`}
                      className={`px-2 py-1 text-sm rounded-full transition-colors ${
                        tag === decodedTag
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary hover:bg-primary/20"
                      }`}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
            </article>
          </Link>
        ))}
      </div>
    </LandingLayoutView>
  );
} 