import React from "react";
import PageBanner from "../components/common/PageBanner";
import BlogSection from "../components/BlogSection";
import ServiceCtaBanner from "../components/common/ServiceCtaBanner";
import { site } from "@/data";

export default function BlogPage() {
  return (
    <main className="bg-white flex flex-col">
      <PageBanner data={site.pageBanners.pages.blog} />
      <BlogSection data={site.blog} />
      <ServiceCtaBanner data={site.ctaBanner} />
    </main>
  );
}
