import { Translations } from '../translations';

export interface NavigationItem {
  label: string;
  href: string;
  items?: NavigationItem[];
}

export const getNavigationItems = (t: Translations): NavigationItem[] => [
  {
    label: t.navigation.home,
    href: "/",
  },
  {
    label: t.navigation.events,
    href: "/events",
  },
  {
    label: t.navigation.competitions,
    href: "#",
    items: [
      {
        label: t.navigation.codeJam,
        href: "/events/happy-hacking-space-competitions-code-jam-181925-f02a63d8",
      },
      {
        label: t.navigation.hackathon,
        href: "/events/hackathon-cultural-heritage-and-digitalization-1c617d99",
      },
    ],
  },
  {
    label: t.navigation.live,
    href: "/live",
  },
  {
    label: t.navigation.hhs,
    href: "#",
    items: [
      {
        label: t.navigation.philosophy,
        href: "/philosophy",
      },
      {
        label: t.navigation.manifesto,
        href: "/manifesto",
      },
      {
        label: t.navigation.team,
        href: "/team",
      },
      {
        label: t.navigation.history,
        href: "/history",
      },
      {
        label: t.navigation.contact,
        href: "/contact",
      },
      {
        label: t.navigation.branding,
        href: "/brand",
      },
      {
        label: t.navigation.stickers,
        href: "/stickers",
      },
    ],
  },
  {
    label: t.navigation.blog,
    href: "/blog",
  },
];

export const getFooterItems = (t: Translations): NavigationItem[] => [
  {
    label: t.navigation.brandKit,
    href: "/brand",
  }
]; 