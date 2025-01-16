export const THEME_OPTIONS = [{ theme: "light" }, { theme: "dark" }];

export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Competitions",
    href: "#",
    items: [
      {
        label: "CodeJam",
        href: "/events/happy-hacking-space-competitions-code-jam-181925-f02a63d8",
      },
      {
        label: "Hackathon",
        href: "/events/hackathon-cultural-heritage-and-digitalization-1c617d99",
      },
    ],
  },
  {
    label: "Live",
    href: "/live",
  },
  {
    label: "HHS",
    href: "#",
    items: [
      {
        label: "Philosophy",
        href: "/philosophy",
      },
      {
        label: "Manifesto",
        href: "/manifesto",
      },
      {
        label: "Team",
        href: "/team",
      },
      {
        label: "History",
        href: "/history",
      },
      {
        label: "Contact",
        href: "/contact",
      },
      {
        label: "Branding",
        href: "/brand",
      },
    ],
  },
];

export const FOOTER_ITEMS = [
  {
    label: "Brand Kit",
    href: "/brand",
  }
];


export const SOCIAL_LINKS = [
  {
    icon: "X",
    tooltip: "X/Twitter",
    href: "https://x.com/happyhackings",
  },
  {
    icon: "I",
    tooltip: "Instagram",
    href: "https://instagram.com/happyhackingspace",
  },
  {
    icon: "L",
    tooltip: "LinkedIn",
    href: "https://linkedin.com/company/happy-hacking-space",
  },
  {
    icon: "G",
    tooltip: "GitHub",
    href: "https://github.com/HappyHackingSpace",
  },
  {
    icon: "M",
    tooltip: "Medium",
    href: "https://medium.com/happy-hacking-space",
  },
  {
    icon: "Y",
    tooltip: "YouTube",
    href: "https://www.youtube.com/@HappyHackingSpace",
  }
];

export const FOOTER = {
  description:
    "Happy Hacking Space is a community of makers, creators, and developers who are passionate about building products and services that make the world a better place.",
  copyRight: `© ${new Date().getFullYear()} HHS. All rights reserved.`,
};
