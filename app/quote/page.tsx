import PageBanner from "../components/common/PageBanner";
import QuoteSection from "../components/quote/QuoteSection";
import data from "../../data/cloudNex.json";

export const metadata = {
  title: "Get A Quote | CloudNex",
};

export default function QuotePage() {
  const { banner } = data.quotePage;

  return (
    <div>
      <PageBanner title={banner.title} breadcrumbs={banner.breadcrumbs} />
      <QuoteSection />
    </div>
  );
}
