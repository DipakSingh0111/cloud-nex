import { notFound } from "next/navigation";
import PageBanner from "../../components/common/PageBanner";
import BlogDetailsContent from "../../components/BlogDetailsContent";
import { site } from "@/data";

interface BlogDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return site.blog.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = site.blog.posts.find((p) => p.slug === slug);
  return post
    ? { title: `${post.title} | ${site.global.companyName}`, description: post.description }
    : {};
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = site.blog.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <PageBanner data={site.pageBanners.pages.blogDetails} />
      <BlogDetailsContent data={post} />
    </main>
  );
}
