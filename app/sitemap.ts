import { SITE } from "@hhs/constants/metadata";
import { getAllEvents } from "../lib/kommunity";

interface KommunityEvent {
  slug: string;
  updated_at: string;
  created_at: string;
}

export default async function sitemap() {
  const pastEvents = await getAllEvents('past');
  const upcomingEvents = await getAllEvents('upcoming');
  const allEvents = [...(pastEvents?.data || []), ...(upcomingEvents?.data || [])];

  const eventUrls = allEvents.map((event: KommunityEvent) => ({
    url: `${SITE.url}/events/${event.slug}`,
    lastModified: new Date(event.updated_at || event.created_at),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${SITE.url}/philosophy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/manifesto`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/brand`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/history`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/live`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/events`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...eventUrls
  ];
}
