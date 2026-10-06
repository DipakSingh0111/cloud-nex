import PageBanner from "../components/common/PageBanner";
import ContactHero from "../components/contact/ContactHero";
import GetInTouch from "../components/contact/GetInTouch";
import { site } from "@/data";

export const metadata = {
  title: `Contact Us | ${site.global.companyName}`,
};

export default function ContactPage() {
  return (
    <div>
      <PageBanner data={site.pageBanners.pages.contact} />
      <ContactHero data={site.contact.hero} />
      <GetInTouch data={site.contact.getInTouch} />
    </div>
  );
}
