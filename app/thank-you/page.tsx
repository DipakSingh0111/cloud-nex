import ThankYouContent from "../components/ThankYouContent";
import { site } from "@/data";

export const metadata = {
  title: `Thank You | ${site.global.companyName}`,
};

export default function ThankYouPage() {
  return (
    <main>
      <ThankYouContent data={site.thankYou} />
    </main>
  );
}
