import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import PageBanner from "../components/common/PageBanner";
import { site } from "@/data";

export default function Page() {
  return (
    <div>
      <PageBanner
        data={{
          title: "About Us",
          breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
          ],
        }}
      />
      <AboutSection data={site.about} />
      <HowItWorks data={site.workingProcess} />
      <WhyChooseUs data={site.whyChooseUs} />
    </div>
  );
}
