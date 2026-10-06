import PageBanner from "../components/common/PageBanner";
import ContactHero from "../components/contact/ContactHero";
import GetInTouch from "../components/contact/GetInTouch";
import data from "../../data/cloudNex.json";

export const metadata = {
  title: "Contact Us | CloudNex",
};

export default function ContactPage() {
  const { banner } = data.contactPage;

  return (
    <div>
      <PageBanner title={banner.title} breadcrumbs={banner.breadcrumbs} bgImage={banner.bgImage} />
      <ContactHero />
      <GetInTouch />
    </div>
  );
}
