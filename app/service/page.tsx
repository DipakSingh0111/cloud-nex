import React from "react";
import PageBanner from "../components/common/PageBanner";
import ServicesPageGrid from "../components/ServicesPageGrid";
import ServiceCtaBanner from "../components/common/ServiceCtaBanner";
import { site } from "@/data";

export default function ServicePage() {
  return (
    <main className="bg-white flex flex-col">
      <PageBanner
        data={{
          title: "Our Services",
          breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Our Services", href: "/service" },
          ],
        }}
      />
      <ServicesPageGrid data={site.servicesPage} />
      <ServiceCtaBanner data={site.ctaBanner} />
    </main>
  );
}
