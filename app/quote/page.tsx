import PageBanner from "../components/common/PageBanner";
import QuoteSection from "../components/quote/QuoteSection";
import { site } from "@/data";

export const metadata = {
  title: `Get A Quote | ${site.global.companyName}`,
};

export default function QuotePage() {
  return (
    <div>
      <PageBanner data={site.pageBanners.pages.quote} />
      <QuoteSection data={site.quote} />
    </div>
  );
}
