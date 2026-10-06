import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import data from "../../data/cloudNex.json";
import SectionHeading from "./common/SectionHeading";

function DotGrid({ className }: { className: string }) {
  return (
    <div
      className={`absolute pointer-events-none grid grid-cols-6 gap-3 ${className}`}
      aria-hidden
    >
      {Array.from({ length: 30 }).map((_, i) => (
        <span key={i} className="w-1 h-1 rounded-full bg-[#9cc0f5]" />
      ))}
    </div>
  );
}

export default function ServicesSection() {
  const { services } = data;

  return (
    <section className="relative bg-[#f3f8fe] pt-16 lg:pt-20 pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#e3eefc] pointer-events-none" />
      <div className="absolute -top-20 -right-28 w-80 h-80 rounded-full bg-white/70 pointer-events-none" />
      <DotGrid className="top-6 left-[12%] hidden md:grid" />
      <DotGrid className="top-10 right-[8%] hidden md:grid" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          align="left"
          badge={services.badge}
          title={services.title}
          highlight={services.highlight}
          description={services.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-12">
          {services.items.map((service, i) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl p-6 pt-5 shadow-[0_6px_24px_rgba(26,95,214,0.06)] hover:shadow-[0_14px_34px_rgba(26,95,214,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <span className="absolute top-5 right-6 text-lg font-medium text-[#c3cedb]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative w-32 h-24 -ml-3 mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="128px"
                  className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-[19px] font-bold text-[#0B2545] mb-2">{service.title}</h3>
              <p className="text-[#4a5868] text-[15px] leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>

              <Link
                href={service.url}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#2e9b2e] hover:text-[#237a23] group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href={services.cta.url}
            className="inline-flex items-center gap-2 bg-[#2e9b2e] hover:bg-[#237a23] text-white text-sm font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 group"
          >
            {services.cta.label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
