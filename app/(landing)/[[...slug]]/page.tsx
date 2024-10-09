import { notFound } from "next/navigation";
import { allLandings } from "@hhs/.content-collections/generated";
import Markdown from "@hhs/components/custom/mdx";

interface ViewPageProps {
  params: {
    slug: string[];
  };
}

async function getViewFromParams(props: ViewPageProps) {
  const { params } = props;
  const slug = params.slug?.join("/") || "";
  const view = allLandings.find((view) => view.slugAsParams === slug);
  if (!view) {
    return null;
  }

  return view;
}

export async function generateStaticParams(): Promise<
  ViewPageProps["params"][]
> {
  return allLandings.map((view) => ({
    slug: view.slugAsParams.split("/"),
  }));
}

export default async function ViewPage(props: ViewPageProps) {
  const { params } = props;
  const view = await getViewFromParams({ params });

  if (!view) {
    notFound();
  }

  return <Markdown code={view.body.code} />;
}
