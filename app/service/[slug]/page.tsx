import React from "react";
import PageBanner from "../../components/common/PageBanner";
import ServiceDetailsContent from "../../components/ServiceDetailsContent";
import ServiceCtaBanner from "../../components/common/ServiceCtaBanner";
import { site } from "@/data";

export function generateStaticParams() {
  return site.servicesPage.list.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = site.servicesPage.list.find((s) => s.slug === slug);

  const crumbLabel =
    service?.title ??
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <main>
      <PageBanner
        data={{
          title: site.pageBanners.pages.serviceDetails.title,
          breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Our Services", href: "/service" },
            { label: crumbLabel, href: `/service/${slug}` },
          ],
        }}
      />
      <ServiceDetailsContent data={site.serviceDetails} />
      <ServiceCtaBanner data={site.ctaBanner} />
    </main>
  );
}
