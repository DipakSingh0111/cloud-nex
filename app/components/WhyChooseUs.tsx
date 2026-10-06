import Image from "next/image";
import {
  ChartNoAxesCombined,
  Cloud,
  Cpu,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import data from "../../data/cloudNex.json";

const icons: Record<string, LucideIcon> = { Cpu, UsersRound, ShieldCheck };

const iconStyles: Record<string, string> = {
  blue: "bg-[#e8f1ff] text-[#1a5fd6]",
  green: "bg-[#e7f6e7] text-[#2e9b2e]",
};

function RotatingBadge({ text }: { text: string }) {
  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-[0_10px_30px_rgba(11,37,69,0.18)] flex items-center justify-center">
      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite]"
        aria-hidden
      >
        <defs>
          <path id="badge-ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text className="fill-[#0B2545] text-[9px] font-semibold">
          {/* textLength = circumference (2π × 44) so the phrase wraps the ring exactly once */}
          <textPath href="#badge-ring" textLength="276" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <Cloud className="w-11 h-11 text-[#1a6dff] fill-[#1a6dff]" />
    </div>
  );
}

export default function WhyChooseUs() {
  const { whyChooseUs } = data;

  return (
    <section className="bg-white pt-4 lg:pt-8 pb-4 lg:pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-14 items-center mb-10">
          <div className="relative lg:ml-10 order-2 lg:order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(11,37,69,0.15)]">
              <Image
                src={whyChooseUs.mainImage}
                alt="Cloud engineer working in a data center"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="absolute top-[22%] right-3 lg:-right-14">
              <RotatingBadge text={whyChooseUs.badgeRingText} />
            </div>
          </div>

          <div className="order-1 lg:order-1">
            <span className="inline-block bg-[#e8f1ff] text-[#1a5fd6] text-sm font-semibold italic tracking-wide px-4 py-1.5 rounded-md mb-4">
              {whyChooseUs.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B2545] tracking-tight leading-[1.15] mb-5">
              {whyChooseUs.title}{" "}
              <span className="text-[#2e9b2e]">{whyChooseUs.highlight}</span>
            </h2>

            <p className="text-[#4a5868] text-base sm:text-[17px] leading-relaxed mb-7">
              {whyChooseUs.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-5">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_6px_24px_rgba(26,95,214,0.08)] px-6 py-6">
                <ChartNoAxesCombined className="w-11 h-11 text-[#2e9b2e] mb-3" strokeWidth={2.25} />
                <p className="text-4xl font-extrabold text-[#1a5fd6] leading-none mb-2">
                  {whyChooseUs.experience.value}
                </p>
                <p className="text-[15px] text-[#4a5868] leading-snug max-w-[130px]">
                  {whyChooseUs.experience.label}
                </p>
              </div>

              <div className="relative min-h-[180px] rounded-2xl overflow-hidden shadow-[0_6px_24px_rgba(11,37,69,0.12)]">
                <Image
                  src={whyChooseUs.sideImage}
                  alt="Engineers reviewing systems in a data center"
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {whyChooseUs.features.map((feature) => {
            const Icon = icons[feature.icon] ?? Cpu;
            return (
              <div
                key={feature.title}
                className="flex items-center gap-5 bg-white rounded-2xl border border-gray-100 shadow-[0_6px_24px_rgba(26,95,214,0.07)] hover:shadow-[0_12px_30px_rgba(26,95,214,0.14)] transition-shadow p-5"
              >
                <div
                  className={`w-16 h-16 shrink-0 rounded-xl flex items-center justify-center ${iconStyles[feature.color] ?? iconStyles.blue}`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <div className="self-stretch w-px bg-gray-200" />
                <div>
                  <h3 className="text-lg font-bold text-[#0B2545] mb-1">{feature.title}</h3>
                  <p className="text-[#4a5868] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
