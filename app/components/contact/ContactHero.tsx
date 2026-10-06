import Image from "next/image";
import {
  Settings,
  ShieldCheck,
  UsersRound,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { site, type ContactHeroData, type SectionProps } from "@/data";
import ContactForm from "./ContactForm";

const icons: Record<string, LucideIcon> = {
  Zap,
  UsersRound,
  Settings,
  ShieldCheck,
};

const iconStyles: Record<string, string> = {
  blue: "bg-[#e8f1ff] text-[#1a6dff]",
  green: "bg-[#e7f6e7] text-[#2e9b2e]",
};

export default function ContactHero({ data, className = "" }: SectionProps<ContactHeroData> = {}) {
  const hero = data || site.contact.hero;

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-white via-[#f7fbff] to-[#eaf3fe] ${className}`}>
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[42%]">
        <Image
          src={hero.image.src}
          alt="CloudNex support specialist"
          fill
          sizes="42vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7fbff] via-[#f7fbff]/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_440px_minmax(0,0.55fr)] gap-10 lg:gap-8 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0B2545]">
              {hero.badge}
            </span>
            <span className="w-8 h-[2px] bg-[#2e9b2e] rounded-full" />
          </div>

          <h1 className="text-4xl sm:text-[44px] font-extrabold text-[#0B2545] leading-[1.12] tracking-tight mb-5">
            {hero.heading.main}
            <br />
            <span className="text-[#2e9b2e]">{hero.heading.highlight}</span>
          </h1>

          <p className="text-[#4a5868] text-base leading-relaxed mb-8 max-w-md">
            {hero.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
            {hero.features.map((feature) => {
              const Icon = icons[feature.icon] ?? Zap;
              return (
                <div key={feature.title} className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center ${iconStyles[feature.color] ?? iconStyles.blue}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2545]">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#4a5868]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <ContactForm data={site.contact.form} />

        <div className="relative lg:hidden aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src={hero.image.src}
            alt="CloudNex support specialist"
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
