import PageBanner from "../components/common/PageBanner";
import ServiceCtaBanner from "../components/common/ServiceCtaBanner";
import PricingSection from "../components/package/PricingSection";
import data from "../../data/cloudNex.json";

export const metadata = {
  title: "Packages | CloudNex",
};

export default function PackagePage() {
  const { banner } = data.packagePage;

  return (
    <div>
      <PageBanner title={banner.title} breadcrumbs={banner.breadcrumbs} />
      <PricingSection />
      <ServiceCtaBanner />
    </div>
  );
}
