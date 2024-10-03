import { SHOOTS_DESCRIPTION, SHOOTS_TITLE } from "@hhs/constants/metadata";
import ShootsPageView from "@hhs/pages/shoots-page";
import { Metadata } from "next";

export default function ShootsPage() {
  return <ShootsPageView />;
}

export const metadata: Metadata = {
  title: SHOOTS_TITLE,
  description: SHOOTS_DESCRIPTION,
  openGraph: {
    title: SHOOTS_TITLE,
    description: SHOOTS_DESCRIPTION,
  },
};
