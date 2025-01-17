import { allBlogs } from "@hhs/.content-collections/generated";
import LandingLayoutView from "@hhs/layouts/landing-layout";
import Link from "next/link";
import Subtitle from "@hhs/components/custom/subtitle";

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
                    // set tags to be links to the tag page
                    <Link
                      key={tag}
                      href={`/blog/tag/${encodeURIComponent(tag)}`}
                      className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors"
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