import React from "react";
import PageBanner from "../components/common/PageBanner";
import ServicesPageGrid from "../components/ServicesPageGrid";
import ServiceCtaBanner from "../components/common/ServiceCtaBanner";

export default function ServicePage() {
  return (
    <main>
      <PageBanner 
        title="Our Services"
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "Our Services", url: "/service" }
        ]}
      />
      <ServicesPageGrid />
      <ServiceCtaBanner />
    </main>
  );
}
