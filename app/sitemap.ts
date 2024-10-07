import { SITE } from "@hhs/constants/metadata";

export default async function sitemap() {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
