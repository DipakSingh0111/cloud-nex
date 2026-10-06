import React from "react";
import PageBanner from "../components/common/PageBanner";
import ServiceCtaBanner from "../components/common/ServiceCtaBanner";
import HowItWorks from "../components/HowItWorks";
import PortfolioSection from "../components/PortfolioSection";
import data from "../../data/cloudNex.json";

export default function PortfolioPage() {
  const { banner } = data.portfolioPage;

  return (
    <main>
      <PageBanner title={banner.title} breadcrumbs={banner.breadcrumbs} />
      <PortfolioSection />
      <HowItWorks />
      <div className="pt-16 lg:pt-24 bg-white">
        <ServiceCtaBanner />
      </div>
    </main>
  );
}
