import { notFound } from "next/navigation";
import PageBanner from "../../components/common/PageBanner";
import BlogDetailsContent from "../../components/BlogDetailsContent";
import data from "../../../data/cloudNex.json";

interface BlogDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return data.blog.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = data.blog.posts.find((p) => p.slug === slug);
  return post ? { title: `${post.title} | CloudNex`, description: post.description } : {};
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = data.blog.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const { banner } = data.blog.details;

  return (
    <main>
      <PageBanner title={banner.title} breadcrumbs={banner.breadcrumbs} />
      <BlogDetailsContent post={post} />
    </main>
  );
}
