import { MANIFESTO_META } from "@hhs/constants/metadata";
import ManifestoPageView from "@hhs/pages/manifesto-page";
import { Metadata } from "next";

export default function ManifestoPage() {
  return <ManifestoPageView />;
}

export const metadata: Metadata = {
  title: MANIFESTO_META.title,
  description: MANIFESTO_META.description,
  openGraph: {
    title: MANIFESTO_META.title,
    description: MANIFESTO_META.description,
  },
};
