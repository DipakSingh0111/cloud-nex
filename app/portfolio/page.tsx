import React from "react";
import PageBanner from "../components/common/PageBanner";
import ServiceCtaBanner from "../components/common/ServiceCtaBanner";
import HowItWorks from "../components/HowItWorks";
import PortfolioSection from "../components/PortfolioSection";
import { site } from "@/data";

export default function PortfolioPage() {
  return (
    <main className="bg-white flex flex-col">
      <PageBanner data={site.pageBanners.pages.portfolio} />
      <PortfolioSection data={site.portfolio.projects} />
      <HowItWorks data={site.workingProcess} />
      <div className="pt-12 lg:pt-14 bg-white">
        <ServiceCtaBanner data={site.ctaBanner} />
      </div>
    </main>
  );
}
