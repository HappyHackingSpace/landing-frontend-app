import { notFound } from "next/navigation";
import { allBlogs } from "@hhs/.content-collections/generated";
import LandingLayoutView from "@hhs/layouts/landing-layout";
import Link from "next/link";
import Subtitle from "@hhs/components/custom/subtitle";
import { Metadata } from "next";

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateStaticParams(): Promise<{ tag: string }[]> {
  const tags = new Set<string>();
  allBlogs.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
}

export async function generateMetadata(props: TagPageProps): Promise<Metadata> {
  const params = await props.params;
  const decodedTag = decodeURIComponent(params.tag);
  return {
    title: `${decodedTag.charAt(0).toUpperCase() + decodedTag.slice(1)} posts`,
    description: `Happy Hacking Space | ${decodedTag} posts`,
    openGraph: {
      title: `${decodedTag} posts`,
      description: `Happy Hacking Space | ${decodedTag} posts`,
      type: "website",
      url: `/blog/tag/${params.tag}`,
      images: [
        {
          url: "/assets/hhs-b.avif",
          width: 1200,
          height: 630,
          alt: `Blog Posts tagged with ${decodedTag}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${decodedTag} posts`,
      description: `Happy Hacking Space | ${decodedTag} posts`,
      images: ["/assets/hhs-b.avif"],
      creator: "@happyhackings"
    },
  };
}

export default async function TagPage(props: TagPageProps) {
  const params = await props.params;
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
      <Subtitle>Posts tagged with &quot;{decodedTag}&quot;</Subtitle>
      <div className="space-y-8">
        {filteredPosts.map((post, index) => (
          <Link key={index} href={post.slug} className="block" legacyBehavior>
            <article className="group dark:hover:bg-green-900 hover:bg-gray-100 p-4 rounded-lg transition-all">
              <Link key={index} href={post.slug} className="block" legacyBehavior>
                <a>
                  <h2 className="text-xl font-semibold dark:group-hover:text-white">
                    {post.title}
                  </h2>
                  <div className="mt-2 text-sm text-white-foreground">
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">{post.summary}</p>
                </a>
              </Link>
              {post.tags && (
                <div className="mt-4 flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${encodeURIComponent(tag)}`}
                      className="px-2 py-1 bg-primary/10 text-dark text-sm rounded-full hover:bg-primary/20 dark:bg-white/10 dark:text-white transition-colors"
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