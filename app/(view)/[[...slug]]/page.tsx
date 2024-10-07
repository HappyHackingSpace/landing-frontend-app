import { notFound } from "next/navigation";
import { allViews } from "@hhs/.content-collections/generated";
import Markdown from "@hhs/components/custom/mdx";

interface ViewPageProps {
  params: {
    slug: string[];
  };
}

async function getViewFromParams(props: ViewPageProps) {
  const { params } = props;
  const slug = params.slug?.join("/") || "";
  const view = allViews.find((view) => view.slugAsParams === slug);
  if (!view) {
    return null;
  }

  return view;
}

export async function generateStaticParams(): Promise<
  ViewPageProps["params"][]
> {
  return allViews.map((view) => ({
    slug: view.slugAsParams.split("/"),
  }));
}

export default async function ViewPage(props: ViewPageProps) {
  const { params } = props;
  const view = await getViewFromParams({ params });

  if (!view) {
    notFound();
  }

  return (
    <main className="p-4">
      <Markdown code={view.body.code} />
    </main>
  );
}
