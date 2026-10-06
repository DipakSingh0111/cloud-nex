import React from "react";
import PageBanner from "../../components/common/PageBanner";
import PortfolioDetailsContent from "../../components/PortfolioDetailsContent";
import ServiceCtaBanner from "../../components/common/ServiceCtaBanner";
import data from "../../../data/cloudNex.json";

export default async function PortfolioDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Replace hyphens with spaces and capitalize each word for the breadcrumb
  const formattedSlug = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main>
      <PageBanner 
        title="Portfolio"
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "Portfolio", url: "/portfolio" },
          { label: formattedSlug, url: `/portfolio/${slug}` }
        ]}
      />
      <PortfolioDetailsContent />
      <div className="pt-10 lg:pt-16 bg-white">
        <ServiceCtaBanner />
      </div>
    </main>
  );
}
