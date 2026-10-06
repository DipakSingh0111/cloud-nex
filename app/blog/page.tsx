import React from "react";
import PageBanner from "../components/common/PageBanner";
import BlogSection from "../components/BlogSection";
import ServiceCtaBanner from "../components/common/ServiceCtaBanner";
import data from "../../data/cloudNex.json";

export default function BlogPage() {
  const { listBanner } = data.blog;

  return (
    <main>
      <PageBanner title={listBanner.title} breadcrumbs={listBanner.breadcrumbs} />
      <BlogSection />
      <div className="pt-8 lg:pt-10 bg-white">
        <ServiceCtaBanner />
      </div>
    </main>
  );
}
