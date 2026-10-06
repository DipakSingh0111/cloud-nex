import React from "react";
import PageBanner from "../../components/common/PageBanner";
import ServiceDetailsContent from "../../components/ServiceDetailsContent";
import ServiceCtaBanner from "../../components/common/ServiceCtaBanner";
import data from "../../../data/cloudNex.json";

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
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
        title={data.serviceDetails.title}
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "Our Services", url: "/service" },
          { label: formattedSlug, url: `/service/${slug}` }
        ]}
      />
      <ServiceDetailsContent />
      <ServiceCtaBanner />
    </main>
  );
}
