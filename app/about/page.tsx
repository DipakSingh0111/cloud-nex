import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import PageBanner from "../components/common/PageBanner";

export default function Page() {
  return (
    <div>
      <PageBanner 
        title="About Us"
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "About Us", url: "/about" }
        ]}
      />
      <AboutSection />
      <WhyChooseUs />
      <HowItWorks />
    </div>
  );
}
