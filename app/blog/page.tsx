import { allBlogs } from "@hhs/.content-collections/generated";
import LandingLayoutView from "@hhs/layouts/landing-layout";
import Link from "next/link";
import Subtitle from "@hhs/components/custom/subtitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts",
  description: "Happy Hacking Space Blog Posts",
  openGraph: {
    title: "Blog Posts",
    description: "Happy Hacking Space Blog Posts",
    type: "website",
    url: "/blog",
    images: [
      {
        url: "/assets/hhs-b.avif", 
        width: 1200,
        height: 630,
        alt: "Blog Posts"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Posts",
    description: "Happy Hacking Space Blog Posts",
    images: ["/assets/hhs-b.avif"],
    creator: "@happyhackings"
  }
};

const BlogPage = () => {
  const sortedPosts = allBlogs.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <LandingLayoutView>
      <Subtitle>Blog Posts</Subtitle>
      <div className="space-y-8">
        {sortedPosts.map((post, index) => (
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
};

export default BlogPage;