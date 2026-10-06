import siteData from "./cloudNex.json";

export type SectionProps<T = unknown> = {
  data?: T;
  className?: string;
};

type Sections = typeof siteData.categories.CloudNex.sections;
const sections: Sections = siteData.categories.CloudNex.sections;

export type GlobalData = typeof siteData.categories.CloudNex.sections.Global.variants.CloudNexGlobal1;
export type TopbarData = typeof siteData.categories.CloudNex.sections.Topbar.variants.CloudNexTopbar1;
export type HeaderData = typeof siteData.categories.CloudNex.sections.Header.variants.CloudNexHeader1;
export type PageBannersData = typeof siteData.categories.CloudNex.sections.PageBanners.variants.CloudNexPageBanners1;
export type HeroBannerData = typeof siteData.categories.CloudNex.sections.HeroBanner.variants.CloudNexHeroBanner1;
export type AboutUsData = typeof siteData.categories.CloudNex.sections.AboutUs.variants.CloudNexAboutUs1;
export type ServicesData = typeof siteData.categories.CloudNex.sections.Services.variants.CloudNexServices1;
export type WhyChooseUsData = typeof siteData.categories.CloudNex.sections.WhyChooseUs.variants.CloudNexWhyChooseUs1;
export type WorkingProcessData = typeof siteData.categories.CloudNex.sections.WorkingProcess.variants.CloudNexWorkingProcess1;
export type PortfolioData = typeof siteData.categories.CloudNex.sections.Portfolio.variants.CloudNexPortfolio1;
export type PackagesData = typeof siteData.categories.CloudNex.sections.Packages.variants.CloudNexPackages1;
export type BlogNewsData = typeof siteData.categories.CloudNex.sections.BlogNews.variants.CloudNexBlogNews1;
export type ContactPageData = typeof siteData.categories.CloudNex.sections.ContactPage.variants.CloudNexContactPage1;
export type QuotePageData = typeof siteData.categories.CloudNex.sections.QuotePage.variants.CloudNexQuotePage1;
export type ThankYouPageData = typeof siteData.categories.CloudNex.sections.ThankYouPage.variants.CloudNexThankYouPage1;
export type FooterData = typeof siteData.categories.CloudNex.sections.Footer.variants.CloudNexFooter1;
export type TemplateComponentsData = typeof siteData.categories.CloudNex.templateComponents;

export type ServicesPageData = ServicesData["page"];
export type ServiceDetailsData = ServicesData["serviceDetails"];
export type ServicesCtaBannerData = ServicesData["page"]["ctaBanner"];
export type PortfolioProjectsData = PortfolioData["projects"];
export type PortfolioDetailsData = PortfolioData["details"];
export type PortfolioProcessData = PortfolioData["process"];
export type PortfolioStatsData = PortfolioData["stats"];
export type PortfolioProject = PortfolioData["projects"]["list"][number];
export type BlogPost = BlogNewsData["posts"][number];
export type BlogDetailsData = BlogNewsData["details"];
export type ContactHeroData = ContactPageData["hero"];
export type ContactFormData = ContactPageData["form"];
export type GetInTouchData = ContactPageData["getInTouch"];
export type QuoteFormData = QuotePageData["form"];
export type Breadcrumb = { label: string; href: string };
export type PageBannerData = { title: string; breadcrumbs: Breadcrumb[]; bgImage?: string };

export const site = {
  global: sections.Global.variants.CloudNexGlobal1,
  topbar: sections.Topbar.variants.CloudNexTopbar1,
  header: sections.Header.variants.CloudNexHeader1,
  pageBanners: sections.PageBanners.variants.CloudNexPageBanners1,
  hero: sections.HeroBanner.variants.CloudNexHeroBanner1,
  about: sections.AboutUs.variants.CloudNexAboutUs1,
  services: sections.Services.variants.CloudNexServices1,
  servicesPage: sections.Services.variants.CloudNexServices1.page,
  serviceDetails: sections.Services.variants.CloudNexServices1.serviceDetails,
  ctaBanner: sections.Services.variants.CloudNexServices1.page.ctaBanner,
  whyChooseUs: sections.WhyChooseUs.variants.CloudNexWhyChooseUs1,
  workingProcess: sections.WorkingProcess.variants.CloudNexWorkingProcess1,
  portfolio: sections.Portfolio.variants.CloudNexPortfolio1,
  portfolioDetails: sections.Portfolio.variants.CloudNexPortfolio1.details,
  packages: sections.Packages.variants.CloudNexPackages1,
  blog: sections.BlogNews.variants.CloudNexBlogNews1,
  blogDetails: sections.BlogNews.variants.CloudNexBlogNews1.details,
  contact: sections.ContactPage.variants.CloudNexContactPage1,
  quote: sections.QuotePage.variants.CloudNexQuotePage1,
  thankYou: sections.ThankYouPage.variants.CloudNexThankYouPage1,
  footer: sections.Footer.variants.CloudNexFooter1,
  templates: siteData.categories.CloudNex.templateComponents,
};

export type Site = typeof site;

export default site;
