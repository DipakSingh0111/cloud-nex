import React from "react";
import PageBanner from "../../components/common/PageBanner";
import PortfolioDetailsContent from "../../components/PortfolioDetailsContent";
import ServiceCtaBanner from "../../components/common/ServiceCtaBanner";
import { site } from "@/data";

export function generateStaticParams() {
  return site.portfolio.projects.list.map((project) => ({ slug: project.slug }));
}

export default async function PortfolioDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = site.portfolio.projects.list.find((p) => p.slug === slug);

  const crumbLabel =
    project?.title ??
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <main>
      <PageBanner
        data={{
          title: site.pageBanners.pages.portfolioDetails.title,
          breadcrumbs: [
            ...site.pageBanners.pages.portfolio.breadcrumbs,
            { label: crumbLabel, href: `/portfolio/${slug}` },
          ],
        }}
      />
      <PortfolioDetailsContent data={site.portfolioDetails} />
      <div className="pt-10 lg:pt-16 bg-white">
        <ServiceCtaBanner data={site.ctaBanner} />
      </div>
    </main>
  );
}
