import PageBanner from "../components/common/PageBanner";
import ServiceCtaBanner from "../components/common/ServiceCtaBanner";
import PricingSection from "../components/package/PricingSection";
import { site } from "@/data";

export const metadata = {
  title: `Packages | ${site.global.companyName}`,
};

export default function PackagePage() {
  return (
    <div>
      <PageBanner data={site.pageBanners.pages.packages} />
      <PricingSection data={site.packages} />
      <ServiceCtaBanner data={site.ctaBanner} />
    </div>
  );
}
