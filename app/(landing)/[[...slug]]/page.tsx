import { notFound } from "next/navigation";
import { allLandings } from "@hhs/.content-collections/generated";
import Markdown from "@hhs/components/custom/mdx";
import Subtitle from "@hhs/components/custom/subtitle";

interface ViewPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getViewFromParams(props: ViewPageProps = { params: Promise.resolve({ slug: [] }) }) {
  const { params } = props;
  const slugArray = (await params).slug || [];
  const slug = slugArray.join("/");
  const view = allLandings.find((view) => view.slugAsParams === slug);
  if (!view) {
    return null;
  }

  return view;
}


export async function generateStaticParams() {
  return allLandings.map((view) => ({
    slug: view.slugAsParams.split('/'),
  }));
}

export default async function ViewPage(props: ViewPageProps) {
  const { params } = props;
  const view = await getViewFromParams({ params });

  if (!view) {
    notFound();
  }

  return <>
    <Subtitle>{view.subtitle}</Subtitle>
    <Markdown code={view.body.code} />
  </>;
}
