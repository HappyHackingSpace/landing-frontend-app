import { ImageResponse } from "next/og";
import OpenGraphImage from "@hhs/components/custom/og-image";
import { OG_IMAGE, SITE } from "@hhs/constants/metadata";
import { getBoldFont, getRegularFont } from "@hhs/utils/fonts";
import { allLandings } from "@hhs/.content-collections/generated";

export const runtime = "edge";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const params = Object.fromEntries(url.searchParams);
    const slug = params.slug;

    console.log(`Received request with slug: ${slug}`);

    const post = allLandings.find((p) => slug === p._meta.path);
    if (!post) {
      console.error(`Post with slug ${slug} not found`);
      return new Response(`Post with slug ${slug} not found`, { status: 404 });
    }

    console.log(`Found post: ${post.title}`);

    const [regularFontData, boldFontData] = await Promise.all([
      getRegularFont(),
      getBoldFont(),
    ]);

    console.log(`Fonts loaded successfully`);

    return new ImageResponse(
      (
        <OpenGraphImage
          title={post.title}
          subtitle={SITE.title}
          description={post.summary}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 22H4a2 2 0 0 1-2-2V6" />
              <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
              <circle cx="12" cy="8" r="2" />
              <rect width="16" height="16" x="6" y="2" rx="2" />
            </svg>
          }
        />
      ),
      {
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        fonts: [
          {
            name: "Geist",
            data: regularFontData,
            style: "normal",
            weight: 400,
          },
          {
            name: "Geist",
            data: boldFontData,
            style: "normal",
            weight: 600,
          },
        ],
      }
    );
  } catch (e: any) {
    console.error(`Error: ${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
