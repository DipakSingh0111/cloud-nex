import HomeBanner from "./components/HomeBanner";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import PortfolioSection from "./components/PortfolioSection";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <PortfolioSection />
      <BlogSection limit={3} />
    </div>
  );
}
