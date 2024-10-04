import { SHOOTS_META } from "@hhs/constants/metadata";
import ShootsPageView from "@hhs/pages/shoots-page";
import { Metadata } from "next";

export default function ShootsPage() {
  return <ShootsPageView />;
}

export const metadata: Metadata = {
  title: SHOOTS_META.title,
  description: SHOOTS_META.description,
  openGraph: {
    title: SHOOTS_META.title,
    description: SHOOTS_META.description,
  },
};
